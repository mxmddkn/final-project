import './footer-copyright.sass';

function Copyright() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    return (
       <div className="footer__copyright">Copyright @ {currentYear} <span>Brandoxide</span> .all right reserved.</div>
    );
  }

  export default Copyright;