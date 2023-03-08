import './feedback.sass';
import FeedbackForm from '../../components/feedback-form/feedback-form';

function Feedback() {
   return(
    <div className="feedback">
    <div className="container">
        <h2 className="feedback__header">DON’T FORGET TO SIGN UP</h2>
        <div className="feedback__divider"></div>
        <div className="feedback__descr">Find out early about all upcoming promotions and new product releases with our newsletter.</div>
        <FeedbackForm/>
    </div>
    </div>
   )
}

export default Feedback;