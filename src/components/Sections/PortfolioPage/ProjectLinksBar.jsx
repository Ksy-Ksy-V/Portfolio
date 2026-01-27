import React from 'react'
import OutlineButton from '../../../components/UI/Buttons/OutlineButton'
import { Figma, Github } from 'lucide-react'
import styles from './ProjectLinksBar.module.css'

const ProjectLinksBar = ({ gitHubLink, link, figmaLink }) => {
  return (
    <nav className={styles.linksBar} aria-label="Project links">
      <div className={styles.linksBarSlot}>
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className={styles.linksBarButton}>
          <OutlineButton>
            <Github size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
            GitHub
          </OutlineButton>
        </a>
      </div>
      <div className={styles.linksBarSlot}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linksBarButton}>
          <OutlineButton alwaysGlow>See the app</OutlineButton>
        </a>
      </div>
      <div className={styles.linksBarSlot}>
        {figmaLink ? (
          <a href={figmaLink} target="_blank" rel="noopener noreferrer" className={styles.linksBarButton}>
            <OutlineButton>
              <Figma size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Figma
            </OutlineButton>
          </a>
        ) : null}
      </div>
    </nav>
  )
}

export default ProjectLinksBar
