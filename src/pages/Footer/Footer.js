import './footer.sass';
import logo from '../../assets/images/logo/logo_main.png';
import inst from '../../assets/images/logo/footer_ig.svg';
import fb from '../../assets/images/logo/footer__fb.svg';
import linked from '../../assets/images/logo/footer_li.svg';
import twit from '../../assets/images/logo/footer_twit.svg';
import { Link } from 'react-scroll';
import Copyright from '../../components/footer-copyright/footer-copyright';

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <div className="footer__logo">
                            <img src={logo} alt="footer_logo" />
                        </div>
                        <div className="footer__descr">
                        But i must explain to you all this mistaken idea of dencouncing pleasure.
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__header">
                            Quick Links
                        </div>
                        <ul className="footer__list">
                            <li className="footer__link">
                                <Link to="#about-us" smooth={true} duration={500}>About Our Company</Link>
                            </li>
                            <li className="footer__link">
                                <Link to="about-us" smooth={true} duration={500}>Services We provide</Link>
                            </li>
                            <li className="footer__link">
                                <Link to="about-us" smooth={true} duration={500}>Career & Opportunity</Link>
                            </li>
                            <li className="footer__link">
                                <Link to="about-us" smooth={true} duration={500}>Privacy & Policy</Link>
                            </li>
                            <li className="footer__link">
                                <Link to="about-us" smooth={true} duration={500}>Contact US</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="footer__header">
                                Company
                        </div>
                            <ul className="footer__list">
                                <li className="footer__link">
                                    <Link to="about-us" smooth={true} duration={500}>About Our Company</Link>
                                </li>
                                <li className="footer__link">
                                    <Link to="about-us" smooth={true} duration={500}>Our testimonials</Link>
                                </li>
                                <li className="footer__link">
                                    <Link to="about-us" smooth={true} duration={500}>Latest News</Link>
                                </li>
                                <li className="footer__link">
                                    <Link to="about-us" smooth={true} duration={500}>Our Mission</Link>
                                </li>
                                <li className="footer__link">
                                    <Link to="about-us" smooth={true} duration={500}>Get a free Quot</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="footer__item">
                        <div className="footer__header">
                                Contact us
                        </div>
                            <ul className="footer__list">
                                <li className="footer__link">
                                    Sagrada Familia, Herba
                                </li>
                                <li className="footer__link">
                                    Street Front USA
                                </li>
                                <li className="footer__link">
                                    <a href="mailto:brandoxide@gmail.com">brandoxide@gmail.com</a>
                                </li>
                                <li className="footer__link">
                                <a href="tel:+1234567890">+1234567890</a>
                                </li>
                            </ul>
                    </div>
                    <div className="footer__item">
                            <div className="footer__header">
                                Follow Us
                            </div>
                            <div className="footer__item-wrapper">
                                <div className="footer__img">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src={fb} alt="facebook" />
                                    </a>
                                </div>
                                <div className="footer__img">
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <img src={twit} alt="twitter" />
                                    </a>
                                </div>
                                <div className="footer__img">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img src={inst} alt="instagram" />
                                    </a>
                                </div>
                                <div className="footer__img">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <img src={linked} alt="linkedin" />
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="footer__divider"></div>
           <Copyright/>
        </footer>
    )
}

export default Footer;