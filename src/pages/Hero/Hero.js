import './hero.sass';
import main from '../../assets/images/hero_main.png';

function Hero() {
    return(
        <div className="hero" id='about-us'>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__elem">
                        <div className="hero__preheader">MODERN INTERIOR</div>
                        <h1 className="hero__header">Create Your Interior Design.</h1>
                        <div className="hero__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                        <button className="hero__button">Contact</button>
                    </div>
                    <div className="hero__item">
                        <div className="hero__image">
                            <img src={main} alt="hero_main" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;