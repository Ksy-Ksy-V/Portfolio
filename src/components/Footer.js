import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <div className="footer">
            <h1><Link to="/" className="logo">LOGO</Link></h1>
            <Link to="/contact" className="btn">Contact</Link>
        </div>
    );
}
 
export default Footer;
