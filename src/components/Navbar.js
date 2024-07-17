const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>LOGO</h1>
            <div className="center-links">
                <a href="/">About me</a>
                <a href="/portfolio">Portfolio</a>
            </div>
            <a href="/contact" className="btn">Contact</a>
        </nav>
    );
}
 
export default Navbar;