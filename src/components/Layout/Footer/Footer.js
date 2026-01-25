import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

import SocialLinks from './SocialLinks'

const Footer = () => {
    const { pathname } = useLocation()
    const isMobile = useMediaQuery('(max-width: 767px)')

    return (
        <>
            <style>{`
                .footer-logo {
                    font-family: 'Consolas', 'Courier New', monospace;
                    font-size: 1.875rem;
                    font-weight: bold;
                    color: var(--color-text-primary);
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .footer-logo:hover {
                    color: var(--color-primary-main) !important;
                    transform: scale(1.05);
                }

                @media (min-width: 640px) {
                    .footer-logo {
                        font-size: 2.25rem;
                    }
                }

                .footer {
                    background: rgba(250, 250, 250, 0.95);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-top: 1px solid rgba(214, 52, 132, 0.2);
                    transition: all 0.3s ease;
                }

                .dark .footer {
                    background: rgba(10, 10, 15, 0.95);
                    border-top: 1px solid rgba(214, 52, 132, 0.2);
                }

                .footer-container {
                    width: 100%;
                    padding: 1.25rem 8.33%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                @media (max-width: 1024px) {
                    .footer-container {
                        padding: 1.25rem 4.17%;
                    }
                }

                @media (max-width: 768px) {
                    .footer-container {
                        padding: 1.25rem 2.6%;
                    }
                }

                @media (max-width: 480px) {
                    .footer-container {
                        padding: 1.25rem 2.08%;
                    }
                }
            `}</style>
            <footer className="footer" style={{
                position: 'relative',
                width: '100%',
                marginTop: '2rem',
            }}>
                <div className="footer-container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}>
                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            KSY
                        </Link>
                    </div>

                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: '1 1 auto',
                        }}>
                            {pathname === '/contact' ? (
                                <div style={{ width: '100%', height: '100%' }} />
                            ) : (
                                <SocialLinks />
                            )}
                        </div>
                    )}

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flex: isMobile ? '1 1 auto' : '0 0 auto',
                    }}>
                        <p style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-text-secondary)',
                            textAlign: 'right',
                            margin: 0,
                            fontFamily: 'Arial, sans-serif',
                        }}>
                            Copyright © 2026 Kseniia Voitikh®. <br /> All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
