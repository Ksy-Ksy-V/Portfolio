const { Resend } = require('resend')
const path = require('path')
const fs = require('fs')

// --- Rate limit (Upstash Redis, optional) ---
let ratelimit = null
function getRatelimit() {
    if (ratelimit) return ratelimit
    if (
        !process.env.UPSTASH_REDIS_REST_URL ||
        !process.env.UPSTASH_REDIS_REST_TOKEN
    )
        return null
    try {
        const { Ratelimit } = require('@upstash/ratelimit')
        const { Redis } = require('@upstash/redis')
        ratelimit = new Ratelimit({
            redis: Redis.fromEnv(),
            limiter: Ratelimit.slidingWindow(5, '1 h'),
            analytics: false,
        })
        return ratelimit
    } catch (_) {
        return null
    }
}

function getClientIp(request) {
    if (request.ip) return request.ip
    if (request.headers && typeof request.headers.get === 'function') {
        return (
            request.headers.get('x-real-ip') ||
            request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            'anonymous'
        )
    }
    return 'anonymous'
}

// --- Env: load .env.local for local dev (only sets vars that are not already set) ---
function loadEnvLocal() {
    try {
        const envPath = path.join(__dirname, '..', '.env.local')
        if (!fs.existsSync(envPath)) return
        const content = fs.readFileSync(envPath, 'utf8')
        content.split(/\r?\n/).forEach((line) => {
            const trimmed = line.trim()
            if (trimmed && !trimmed.startsWith('#')) {
                const idx = trimmed.indexOf('=')
                if (idx > 0) {
                    const key = trimmed.slice(0, idx).trim()
                    const value = trimmed
                        .slice(idx + 1)
                        .trim()
                        .replace(/^["']|["']$/g, '')
                    if (!process.env[key]) process.env[key] = value
                }
            }
        })
    } catch (_) {}
}

function jsonResponse(obj, status = 200) {
    return new Response(JSON.stringify(obj), {
        status,
        headers: { 'Content-Type': 'application/json' },
    })
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}

function escapeHtml(text) {
    if (!text) return ''
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    }
    return String(text).replace(/[&<>"']/g, (m) => map[m])
}

async function handleRequest(request) {
    if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405)
    }

    loadEnvLocal()

    const apiKey = process.env.RESEND_API_KEY
    const recipientEmail =
        process.env.CONTACT_EMAIL || process.env.RESEND_TO_EMAIL
    const fromAddress =
        process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'

    if (!apiKey) {
        return jsonResponse(
            {
                error: 'RESEND_API_KEY is not set. Add it to .env.local or Vercel environment variables.',
            },
            500
        )
    }

    if (!recipientEmail) {
        return jsonResponse(
            {
                error: 'CONTACT_EMAIL is not set. Add it to .env.local or Vercel environment variables.',
            },
            500
        )
    }

    const rl = getRatelimit()
    if (rl) {
        const identifier = getClientIp(request)
        const { success: allowed } = await rl.limit(identifier)
        if (!allowed) {
            return jsonResponse(
                { error: 'Too many requests. Please try again in an hour.' },
                429
            )
        }
    }

    let body
    try {
        body = await request.json()
    } catch {
        body = {}
    }

    const { name, email, message, hp: honeypot } = body || {}

    if (honeypot) {
        return jsonResponse({ success: true }, 200)
    }

    if (!name || !email || !message) {
        return jsonResponse(
            {
                error: 'Validation failed',
                fields: {
                    ...(!name && { name: 'Name is required' }),
                    ...(!email && { email: 'Email is required' }),
                    ...(!message && { message: 'Message is required' }),
                },
            },
            400
        )
    }

    if (!validateEmail(email)) {
        return jsonResponse(
            {
                error: 'Validation failed',
                fields: { email: 'Invalid email address' },
            },
            400
        )
    }

    const resend = new Resend(apiKey)

    try {
        const { data, error } = await resend.emails.send({
            from: fromAddress,
            to: [recipientEmail],
            replyTo: email,
            subject: `Portfolio: message from ${escapeHtml(name)}`,
            html: `
        <h2>New message from your site</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
        })

        if (error) {
            console.error('Resend error:', error)
            return jsonResponse(
                {
                    error: `Resend: ${error.message || 'Failed to send email.'}`,
                },
                500
            )
        }

        return jsonResponse({ success: true, id: data?.id }, 200)
    } catch (err) {
        console.error('Contact API error:', err)
        return jsonResponse(
            { error: err.message || 'Internal server error.' },
            500
        )
    }
}

// Vercel: Web Standard (request) or Node (req, res)
module.exports = async function handler(req, res) {
    const isWebRequest = req && typeof req.json === 'function'
    const request = isWebRequest ? req : nodeReqToRequest(req)
    if (!isWebRequest && req && req.headers) {
        request.ip =
            req.headers['x-real-ip'] ||
            (req.headers['x-forwarded-for'] &&
                req.headers['x-forwarded-for'].split(',')[0].trim()) ||
            'anonymous'
    }
    const response = await handleRequest(request)

    if (!isWebRequest && res && typeof res.status === 'function') {
        res.status(response.status)
        response.headers.forEach((v, k) => res.setHeader(k, v))
        res.end(await response.text())
        return
    }
    return response
}

function nodeReqToRequest(req) {
    return {
        method: req.method || 'GET',
        json: () => Promise.resolve(req.body || {}),
    }
}
