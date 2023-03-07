import './footer.styles.scss'
//import  {ReactComponent as Footerimage} from '../../../assets/footer.png'

<<<<<<< Updated upstream

const Footer = () => {
    return (
        <div className="footer img">
            <div className="sb-footer section-padding">
                <div className="sb-footer-links">
                    <div className="sb-footer-links-div">
                        <h4>PARTNERSHIP</h4>

                    </div>
                    <div className="sb-footer-links-div">
                        <h4>OFFICE</h4>
                        <p>Address - HQ
                            5 Royle Crescent
                            London W13 0BH
                            United Kingdom
                        </p>
                        
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>CONTACT US</h4>
                        <p>Info@goagilecloud.com</p>
                        <p>+44 7920 461147</p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="sb-footer-below">
                <div className="footer-copyrights">
                    <p>
                        @{new Date().getFullYear()} GoAgileCloud. All rights reserved.
                    </p>
=======
import './footer.styles.scss';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__company-vision'>
                <h2>Our Vision</h2>
                <p>
                    At GAC we want to help every small- and mid-sized firm leverage the power of cloud technology by
                    reducing their overall infrastructure cost and boosting their profits in order to help them achieve their goals.
                </p>
            </div>
            <div className='footer__cta row'>
                <div className='column'>
                    <h3>Partners</h3>
                    <Partner1 className='icon'/>
                    <Partner2 />
                </div>
                <div className='column'>
                    <h3>Office</h3>
                    <p>Address - HQ 5 Royle Crescent</p>
                    <p>London W13 0BH</p>
                    <p>United Kingdom</p>
                </div>
                <div className='column'>
                    <h3>Links</h3>
                    <p><Link to={'http://localhost:3000'} target="_top">
                            Home 
                    </Link></p>
                    <p><Link to={'#one'} target="_top">
                            Services
                    </Link></p>

>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    );
}
 
export default Footer;