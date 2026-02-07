import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import styles from './PixelPlayDesktopSection.module.css'

const GAME_URL = 'https://game-iota-six.vercel.app/'

const MockupContent = ({ onOverlayClick }) => (
    <figure
        className={`${styles.deviceMockup} ${styles.deviceDesktop}`}
        aria-label="Desktop mockup — Pixel Play game"
    >
        <div className={styles.deviceBezel}>
            <div className={styles.deviceScreen}>
                <div
                    className={styles.deviceScreenScroll}
                    tabIndex={0}
                    role="region"
                    aria-label="Game — click to open full screen"
                >
                    <img
                        src={`${process.env.PUBLIC_URL || ''}/img/pixel/pixelPlayStart.png`}
                        alt=""
                        className={styles.screenPreviewImage}
                        aria-hidden
                    />
                    <div
                        className={styles.screenOverlay}
                        onClick={onOverlayClick}
                        onKeyDown={(e) => e.key === 'Enter' && onOverlayClick()}
                        role="button"
                        tabIndex={0}
                        aria-label="Click to play — open game in full screen"
                    >
                        Click to play
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.deviceStand} aria-hidden />
    </figure>
)

const GameFullscreenPopup = ({ onClose }) => {
    useEffect(() => {
        const scrollY = window.scrollY
        const html = document.documentElement
        html.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.left = '0'
        document.body.style.right = '0'
        document.body.style.width = '100%'
        return () => {
            html.style.overflow = ''
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''
            document.body.style.width = ''
            window.scrollTo(0, scrollY)
        }
    }, [])

    return (
        <div
            className={styles.popupOverlay}
            role="dialog"
            aria-modal="true"
            aria-label="Pixel Play — full screen game"
        >
            <button
                type="button"
                className={styles.popupClose}
                onClick={onClose}
                aria-label="Close"
            >
                <span aria-hidden>×</span>
            </button>
            <div className={styles.popupContent}>
                <iframe
                    src={GAME_URL}
                    title="Pixel Play — retro game platform"
                    className={styles.popupIframe}
                />
            </div>
        </div>
    )
}

const PixelPlayDesktopSection = () => {
    const [popupOpen, setPopupOpen] = useState(false)

    const openPopup = useCallback(() => setPopupOpen(true), [])
    const closePopup = useCallback(() => setPopupOpen(false), [])

    return (
        <section
            className={styles.section}
            aria-labelledby="pixel-play-desktop-heading"
        >
            <header className={styles.header}>
                <p className={styles.subtitle}>{'< Play in Browser />'}</p>
                <h2
                    id="pixel-play-desktop-heading"
                    className={`heading-h2 ${styles.title}`}
                >
                    Pixel Play
                </h2>
                <p className={styles.description}>
                    Click «Click to play» to open the game in full screen. Use
                    the close button to exit.
                </p>
            </header>
            <div className={styles.panel}>
                <div className={styles.singleMockupWrap}>
                    <MockupContent onOverlayClick={openPopup} />
                </div>
            </div>
            {popupOpen &&
                createPortal(
                    <GameFullscreenPopup onClose={closePopup} />,
                    document.body
                )}
        </section>
    )
}

export default PixelPlayDesktopSection
