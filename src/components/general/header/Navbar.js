import { Link } from "react-router-dom";
import ModeSwitchBtn from "./ModeSwitchBtn"


const Navbar = () => {
    return (
        <nav className="navbar"> 
            
            <div className="center-links">
                <Link to="/">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div> 

            <ModeSwitchBtn />
        </nav>
    );
}
 
export default Navbar;