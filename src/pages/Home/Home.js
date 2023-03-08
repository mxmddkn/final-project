import './home.sass';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Offer from '../Offer/Offer';
import ProgressBar from '../../components/progress-bar/progress-bar';
import Feedback from '../Feedback/Feedback';
function Home() {
    return(
        <div>
            <Navbar/>
            <ProgressBar/>
            <Hero/>
            <Offer/>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default Home;