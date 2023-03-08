import './navbar.sass';
import logo from '../../assets/images/logo/logo_main.png';

function Navbar() {
    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar__wrapper">
                    <div className="navbar__logo">
                        <img src={logo} alt="main_logo" />
                    </div>
                    <div className="navbar__wrapper2">
                    <nav className="navbar__main">
                        <ul className="navbar__list">
                            <li className="navbar__elem"><a href="#home">Home</a></li>
                            <li className="navbar__elem"><a href="#project">Project</a></li>
                            <li className="navbar__elem"><a href="#services">Services</a></li>
                            <li className="navbar__elem"><a href="#about">About</a></li>
                            <li className="navbar__elem"><a href="#blog">Blog</a></li>
                            <li className="navbar__elem"><a href="#shop">Shop</a></li>
                            <li className="navbar__elem"><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="navbar__btn">
                        <button className="navbar__signup">Sign Up</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;