import { Link } from "react-router-dom";

import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header">
            <h1><Link to="/" className="logo">LOGO</Link></h1> 
            <Navbar />
        </div>
    );
}
 
export default Header;