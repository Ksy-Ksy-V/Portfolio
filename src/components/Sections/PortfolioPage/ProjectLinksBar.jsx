import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import OutlineButton from '../../../components/UI/Buttons/OutlineButton'
import { Figma, Github } from 'lucide-react'
import styles from './ProjectLinksBar.module.css'

const ProjectLinksBar = ({ gitHubLink, link, figmaLink }) => {
  const navRef = useRef(null)

  useLayoutEffect(() => {
    const el = navRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.25 })
    }, navRef)
    return () => ctx.revert()
  }, [])

  return (
    <nav ref={navRef} className={styles.linksBar} aria-label="Project links">
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
