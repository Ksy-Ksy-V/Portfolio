import React, { useState, useEffect } from 'react'
import { Monitor, Tablet, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './MultiDeviceScreenshotsSection.module.css'

const VIEWS = [
  { key: 'desktop', label: 'Desktop', dataKey: 'desc', Icon: Monitor },
  { key: 'tablet', label: 'Tablet', dataKey: 'tab', Icon: Tablet },
  { key: 'mobile', label: 'Mobile', dataKey: 'mob', Icon: Smartphone },
]

const DESCRIPTION =
  'Seamlessly designed for desktop, tablet, and mobile devices with a responsive layout.'

const MultiDeviceScreenshotsSection = ({ imagesData }) => {
  const [currentView, setCurrentView] = useState('desktop')
  const [currentIndex, setCurrentIndex] = useState(0)

  const activeView = VIEWS.find((v) => v.key === currentView) ?? VIEWS[0]
  const images = imagesData?.[activeView.dataKey] ?? []
  const hasImages = images.length > 0
  const currentSrc = hasImages ? images[currentIndex % images.length] : null

  useEffect(() => {
    setCurrentIndex(0)
  }, [currentView])

  if (!imagesData) return null
  if (!hasImages && !imagesData.desc?.length && !imagesData.tab?.length && !imagesData.mob?.length) {
    return null
  }

  const goPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? images.length - 1 : i - 1))
  }
  const goNext = () => {
    setCurrentIndex((i) => (i >= images.length - 1 ? 0 : i + 1))
  }
  const goToDot = (idx) => setCurrentIndex(idx)

  const deviceClass = `device${activeView.key.charAt(0).toUpperCase()}${activeView.key.slice(1)}`

  return (
    <section className={styles.section} aria-labelledby="multi-device-heading">
      <header className={styles.header}>
        <p className={styles.subtitle}>{'< Responsive Design />'}</p>
        <h2 id="multi-device-heading" className={`heading-h2 ${styles.title}`}>
          Multi-Device Experience
        </h2>
        <p className={styles.description}>{DESCRIPTION}</p>
        <div className={styles.tabs} role="tablist" aria-label="Device selection">
          {VIEWS.map((view) => {
            const viewImages = imagesData[view.dataKey] ?? []
            const hasViewImages = viewImages.length > 0
            const Icon = view.Icon
            return (
              <button
                key={view.key}
                type="button"
                role="tab"
                aria-selected={currentView === view.key}
                aria-controls={`panel-${view.key}`}
                id={`tab-${view.key}`}
                className={`${styles.tab} ${currentView === view.key ? styles.tabActive : ''}`}
                onClick={() => hasViewImages && setCurrentView(view.key)}
                disabled={!hasViewImages}
              >
                <span className={styles.tabIconWrap} aria-hidden>
                  <Icon size={24} className={styles.tabIcon} />
                </span>
                <span className={styles.tabLabel}>{view.label}</span>
              </button>
            )
          })}
        </div>
      </header>

      <div
        id={`panel-${activeView.key}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeView.key}`}
        className={styles.panel}
      >
        <div className={styles.singleMockupWrap}>
          {currentSrc && (
            <figure
              className={`${styles.deviceMockup} ${styles[deviceClass]}`}
              aria-label={`${activeView.label} mockup, screenshot ${currentIndex + 1} of ${images.length}`}
            >
              <div className={styles.deviceBezel}>
                <div className={styles.deviceScreen}>
                  <div
                    className={styles.deviceScreenScroll}
                    tabIndex={0}
                    role="region"
                    aria-label="Scroll screenshot"
                  >
                    <img
                      src={currentSrc}
                      alt={`${activeView.label} screenshot — screen ${currentIndex + 1}`}
                      className={styles.screenImage}
                    />
                  </div>
                </div>
              </div>
              {activeView.key === 'desktop' && <div className={styles.deviceStand} aria-hidden />}
            </figure>
          )}
        </div>

        {hasImages && images.length > 1 && (
          <nav className={styles.carousel} aria-label="Screenshot navigation">
            <button
              type="button"
              className={styles.carouselBtn}
              onClick={goPrev}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} aria-hidden />
            </button>
            <div className={styles.carouselDots} role="tablist" aria-label="Screenshot number">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={currentIndex === idx}
                  aria-label={`Screenshot ${idx + 1}`}
                  className={`${styles.carouselDot} ${currentIndex === idx ? styles.carouselDotActive : ''}`}
                  onClick={() => goToDot(idx)}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.carouselBtn}
              onClick={goNext}
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} aria-hidden />
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}

export default MultiDeviceScreenshotsSection
