import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './ProjectNavButton.module.css'

const ProjectNavButton = ({ direction, onClick, ariaLabel, iconSize = 48 }) => {
  const label = direction === 'prev' ? 'prev project' : 'next project'
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={onClick}
        className={styles.button}
        aria-label={ariaLabel}
      >
        <Icon size={iconSize} className={styles.icon} />
      </button>
      <span className={`body-text-regular ${styles.label}`}>{label}</span>
    </div>
  )
}

export default ProjectNavButton
