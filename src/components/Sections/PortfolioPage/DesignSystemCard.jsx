import React from 'react'
import styles from './DesignSystemCard.module.css'

const DEFAULT_DESIGN_SYSTEM = {
  colors: [
    { label: 'Primary', hex: '#387171', borderHex: '#64fcf2' },
    { label: 'Dark', hex: '#387171', opacity: 50 },
    { label: 'Light', hex: '#387171', opacity: 10 },
    { label: 'Secondary', hex: '#64fcf2' },
  ],
  gradient: {
    bar: 'linear-gradient(90deg, #1d3335 0%, #2d151a 100%)',
    textBar: 'linear-gradient(270deg, #1d3335 0%, #2d151a 100%)',
  },
  textSample:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam',
  typography: [
    { fontFamily: "'Karma', serif", label: 'Karma, serif' },
    { fontFamily: "'DM Sans', sans-serif", label: 'DM Sans' },
  ],
}

const DesignSystemCard = ({ designSystem }) => {
  const ds = designSystem ?? DEFAULT_DESIGN_SYSTEM
  const { colors = [], gradient = {}, textSample = '', typography = [] } = ds

  const getSwatchStyle = (item) => {
    if (item.borderHex) {
      return { background: item.hex, border: `2px solid ${item.borderHex}` }
    }
    if (item.opacity != null) {
      return { background: `color-mix(in srgb, ${item.hex} ${item.opacity}%, transparent)` }
    }
    return { background: item.hex }
  }

  const getSwatchHexText = (item) => {
    if (item.opacity != null) return `${item.hex} ${item.opacity}%`
    return item.hex
  }

  const isPrimary = (item) => Boolean(item.borderHex)

  return (
    <div className={`${styles.designSystemCard} ${styles.gridCellDesign}`}>
      <p className={styles.contextTag}>{'< Design System />'}</p>
      <div className={styles.dsSection}>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Colors</h4>
        <div className={styles.colorSwatchesRow}>
          {colors.map((item, idx) => (
            <div key={idx} className={styles.swatchItem}>
              <span className={styles.swatchLabel}>{item.label}</span>
              <span
                className={`${styles.swatch} ${isPrimary(item) ? styles.swatchPrimary : ''}`}
                style={getSwatchStyle(item)}
                aria-hidden
              />
              <span className={styles.swatchHex}>{getSwatchHexText(item)}</span>
            </div>
          ))}
        </div>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Gradient</h4>
        <div className={styles.dsRectBlock}>
          <div
            className={styles.gradientBar}
            style={{ background: gradient.bar || DEFAULT_DESIGN_SYSTEM.gradient.bar }}
            aria-hidden
          />
        </div>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Text</h4>
        <div className={styles.dsRectBlock}>
          <div
            className={styles.gradientBarWithText}
            style={{ background: gradient.textBar || DEFAULT_DESIGN_SYSTEM.gradient.textBar }}
          >
            <span className={styles.gradientBarText}>
              {textSample || DEFAULT_DESIGN_SYSTEM.textSample}
            </span>
          </div>
        </div>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Typography</h4>
        <div className={styles.typographySamples}>
          {(typography.length ? typography : DEFAULT_DESIGN_SYSTEM.typography).map(
            (typo, idx) => (
              <div key={idx} className={styles.typoRow}>
                <span
                  className={styles.typoAg}
                  style={{
                    background: colors[0]?.hex ?? '#387171',
                    color: '#fff',
                    fontFamily: typo.fontFamily,
                  }}
                >
                  Ag
                </span>
                <span className={styles.typoLabel} style={{ fontFamily: typo.fontFamily }}>
                  {typo.label}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default DesignSystemCard
