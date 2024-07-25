import "./heroSection.css"

const HeroSection = () => {
    return (<header className='hero-section'>
        <div className='hero-section__wrapper'>

            <h1 className='hero-section__title'>
                <strong>Hi, my name is <em>Ksy!</em></strong>
                <br />a frontend developer
            </h1>

            <div className='hero-section__text'>
                <p>with passion for learning and creating.</p>
            </div>

            <a href='#!' className='btn'>Download CV</a>

        </div>
    </header>);
}
 
export default HeroSection;