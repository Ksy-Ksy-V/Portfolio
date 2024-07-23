import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><Link to="/" className="logo">LOGO</Link></h1> 
            
            <div className="center-links">
                <Link to="/">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <Link to="/contact" className="btn">Contact</Link>
        </nav>
    );
}
 
export default Navbar;