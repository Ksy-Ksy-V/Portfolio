import React from 'react'
import styles from './DevelopmentProcessCard.module.css'

const DevelopmentProcessCard = ({
    developmentDescription,
    developmentLayers,
    developmentConclusion,
    hasDataFlowDiagram,
}) => {
    const fullWidthClass = !hasDataFlowDiagram
        ? styles.gridCellDevelopmentFullWidth
        : ''

    return (
        <div
            className={`${styles.developmentCard} ${styles.gridCellDevelopment} ${fullWidthClass}`}
        >
            <p className="sectionContextTag">{'< 02 />'}</p>
            <h3 className={`heading-h4 ${styles.aboutTitle}`}>
                Development Process
            </h3>
            <p
                className={`body-text-regular ${styles.description} ${styles.descriptionPreLine}`}
            >
                {developmentDescription}
            </p>
            {developmentLayers?.length > 0 && (
                <ul className={styles.developmentLayersList}>
                    {developmentLayers.map((layer, idx) => (
                        <li
                            key={idx}
                            className={`body-text-regular ${styles.developmentLayersItem}`}
                        >
                            {layer}
                        </li>
                    ))}
                </ul>
            )}
            {developmentConclusion && (
                <p
                    className={`body-text-regular ${styles.description} ${styles.descriptionPreLine} ${styles.developmentConclusion}`}
                >
                    {developmentConclusion}
                </p>
            )}
        </div>
    )
}

export default DevelopmentProcessCard
