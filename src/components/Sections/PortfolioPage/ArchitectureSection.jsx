import React from 'react'
import styles from './ArchitectureSection.module.css'

const ArchitectureSection = ({ dataFlowDiagram, architectureDiagramTitle }) => {
  if (!dataFlowDiagram?.length) {
    return <div className={styles.gridCellDataFlowEmpty} aria-hidden />
  }

  return (
    <div className={`${styles.dataFlowDiagramSection} ${styles.gridCellDataFlow}`}>
      <p className={styles.contextTag}>{'< Architecture />'}</p>
      <h4 className={`heading-h4 ${styles.dataFlowTitle}`}>
        {architectureDiagramTitle || 'System Flow'}
      </h4>
      <div className={styles.flowDiagram}>
        {dataFlowDiagram.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className={styles.flowBlock}>
              <strong className={styles.flowBlockTitle}>{step.title}</strong>
              <span className={styles.flowBlockSubtitle}>{step.subtitle}</span>
            </div>
            {idx < dataFlowDiagram.length - 1 && (
              <div className={styles.flowArrow} aria-hidden>
                ↓
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ArchitectureSection
