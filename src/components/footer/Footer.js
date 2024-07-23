import { Link } from "react-router-dom";


import './footer.css'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
            <div className='footer__wrapper'>
                    <ul className='social'>
                        <li className='social__item'>
                            <a href="https://www.instagram.com/" 
                            className="btn"> Instagram </a> 
                        </li>

                        <li className='social__item'>
                            <a href="https://github.com/" 
                            className="btn"> GitHub </a> 
                        </li>

                        <li className='social__item'>
                            <a href="https://www.linkedin.com/" 
                            className="btn"> LinkedIn </a> 
                        </li>
                    </ul>

                <div className='copyright'>
                <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
            </div>

            <div className="footer">
                <h1><Link to="/" className="logo">LOGO</Link></h1>
                <Link to="/contact" className="btn">Contact</Link>
        </div>
        </footer>
    );
}
 
export default Footer;
