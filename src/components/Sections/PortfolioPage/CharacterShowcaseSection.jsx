import React from 'react'
import styles from './CharacterShowcaseSection.module.css'
import {
    SPRITES,
    CYCLE_DURATION_MS,
    DISPLAY_FRAME_WIDTH,
    DISPLAY_FRAME_HEIGHT,
} from '../../../data/characterShowcaseData'

const getFrameLayerClass = (frames, styles) => {
    if (frames === 12) return `${styles.frameLayer} ${styles.frameLayerSteps12}`
    if (frames === 6) return `${styles.frameLayer} ${styles.frameLayerSteps6}`
    return styles.frameLayer
}

const CharacterShowcaseSection = ({
    sprites = SPRITES,
    title = 'Character showcase',
}) => {
    if (!sprites?.length) return null

    return (
        <section
            className={styles.section}
            aria-labelledby="character-showcase-heading"
        >
            <header className={styles.header}>
                <p className={styles.subtitle}>{'< Pixel Art />'}</p>
                <h2
                    id="character-showcase-heading"
                    className={`heading-h2 ${styles.title}`}
                >
                    {title}
                </h2>
            </header>
            <div className={styles.showcase}>
                {sprites.flatMap((sprite, spriteIndex) => {
                    const partWidth = sprite.sheetWidth / sprite.rowDivisions
                    const scaleX = DISPLAY_FRAME_WIDTH / partWidth
                    const scaleY = DISPLAY_FRAME_HEIGHT / sprite.frameHeight
                    const backgroundSize = `${sprite.sheetWidth * scaleX}px ${sprite.sheetHeight * scaleY}px`
                    const cycleMs = sprite.cycleDurationMs ?? CYCLE_DURATION_MS
                    return sprite.animations.map(
                        ({ row, label, frames = 8 }) => {
                            const posY = -row * DISPLAY_FRAME_HEIGHT
                            const frameLayerClass = getFrameLayerClass(
                                frames,
                                styles
                            )
                            const stepDurationMs = cycleMs / frames
                            return (
                                <div
                                    key={`${spriteIndex}-${row}-${frames}`}
                                    className={styles.viewportWrap}
                                    title={label}
                                >
                                    <div
                                        className={styles.viewport}
                                        style={{
                                            width: DISPLAY_FRAME_WIDTH,
                                            height: DISPLAY_FRAME_HEIGHT,
                                            '--cycle-duration': `${cycleMs}ms`,
                                        }}
                                        role="img"
                                        aria-label={label}
                                    >
                                        {Array.from(
                                            { length: frames },
                                            (_, i) => (
                                                <div
                                                    key={i}
                                                    className={frameLayerClass}
                                                    style={{
                                                        backgroundImage: `url(${sprite.url})`,
                                                        backgroundSize,
                                                        backgroundPosition: `${-i * DISPLAY_FRAME_WIDTH}px ${posY}px`,
                                                        animationDelay: `-${i * stepDurationMs}ms`,
                                                    }}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    )
                })}
            </div>
        </section>
    )
}

export default CharacterShowcaseSection
