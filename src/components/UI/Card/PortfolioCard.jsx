import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import OutlineButton from '../Buttons/OutlineButton'
import Tag from '../Tag/Tag'
import styles from './PortfolioCard.module.css'

const PortfolioCard = ({ title, imgSrc, id, description, skills = [], scrollAnimationDelay = 0 }) => {
  const navigate = useNavigate()
  const { ref, isVisible } = useScrollAnimation({
    rootMargin: '-50px',
    threshold: 0.1,
  })

  const randomDelay = Math.random() * 5
  const randomDuration = 12 + Math.random() * 8

  const handleNavigate = useCallback(() => {
    navigate(`/portfolio-details/${id}`)
  }, [navigate, id])

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation()
    handleNavigate()
  }, [handleNavigate])

  const cardStyle = {
    '--card-animation-delay': `${randomDelay}s`,
    '--card-animation-duration': `${randomDuration}s`,
    '--scroll-animation-delay': `${scrollAnimationDelay}s`,
  }

  const cardClassName = `${styles.card} ${isVisible ? styles.slideUp : styles.hidden}`
  const imageUrl = imgSrc || '/img/sliderData/projectPrev01.jpg'

  return (
    <div
      ref={ref}
      className={cardClassName}
      style={cardStyle}
    >
      <div className={styles.imageWrapper}>
        <img 
          src={imageUrl}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h2 className={`heading-h2 ${styles.title}`}>
          {`< ${title} >`}
        </h2>
        {description && (
          <p className={`body-text-regular ${styles.description}`}>
            {description}
          </p>
        )}
        {skills && skills.length > 0 && (
          <div className={styles.tags}>
            {skills.map((skill, index) => (
              <Tag key={index} technology={skill} />
            ))}
          </div>
        )}
        <div className={styles.buttonWrapper}>
          <OutlineButton onClick={handleButtonClick}>
            View Project →
          </OutlineButton>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
