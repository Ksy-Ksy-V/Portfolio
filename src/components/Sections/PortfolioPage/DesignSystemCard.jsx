import React from 'react'
import styles from './DesignSystemCard.module.css'

const DesignSystemCard = () => {
  return (
    <div className={`${styles.designSystemCard} ${styles.gridCellDesign}`}>
      <p className={styles.contextTag}>{'< Design System />'}</p>
      <div className={styles.dsSection}>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Colors</h4>
        <div className={styles.colorSwatchesRow}>
          <div className={styles.swatchItem}>
            <span className={styles.swatchLabel}>Primary</span>
            <span className={`${styles.swatch} ${styles.swatchPrimary}`} aria-hidden />
            <span className={styles.swatchHex}>#387171</span>
          </div>
          <div className={styles.swatchItem}>
            <span className={styles.swatchLabel}>Dark</span>
            <span className={styles.swatch} style={{ background: 'color-mix(in srgb, #387171 50%, transparent)' }} aria-hidden />
            <span className={styles.swatchHex}>#387171 50%</span>
          </div>
          <div className={styles.swatchItem}>
            <span className={styles.swatchLabel}>Light</span>
            <span className={styles.swatch} style={{ background: 'color-mix(in srgb, #387171 10%, transparent)' }} aria-hidden />
            <span className={styles.swatchHex}>#387171 10%</span>
          </div>
          <div className={styles.swatchItem}>
            <span className={styles.swatchLabel}>Secondary</span>
            <span className={styles.swatch} style={{ background: '#64fcf2' }} aria-hidden />
            <span className={styles.swatchHex}>#64fcf2</span>
          </div>
        </div>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Gradient</h4>
        <div className={styles.dsRectBlock}>
          <div className={styles.gradientBar} style={{ background: 'linear-gradient(90deg, #1d3335 0%, #2d151a 100%)' }} aria-hidden />
        </div>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Text</h4>
        <div className={styles.dsRectBlock}>
          <div className={styles.gradientBarWithText} style={{ background: 'linear-gradient(270deg, #1d3335 0%, #2d151a 100%)' }}>
            <span className={styles.gradientBarText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
            </span>
          </div>
        </div>
        <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Typography</h4>
        <div className={styles.typographySamples}>
          <div className={styles.typoRow}>
            <span className={styles.typoAg} style={{ background: '#387171', color: '#fff', fontFamily: "'Karma', serif" }}>
              Ag
            </span>
            <span className={styles.typoLabel} style={{ fontFamily: "'Karma', serif" }}>
              Karma, serif
            </span>
          </div>
          <div className={styles.typoRow}>
            <span className={styles.typoAg} style={{ background: '#387171', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
              Ag
            </span>
            <span className={styles.typoLabel} style={{ fontFamily: "'DM Sans', sans-serif" }}>
              DM Sans
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignSystemCard
