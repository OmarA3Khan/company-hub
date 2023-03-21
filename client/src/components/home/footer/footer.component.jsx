import { ReactComponent as LinkedInIcon } from '../../../assets/icons/linkedIn.svg';
import Partner1 from '../../../assets/home/aws.jpg';
import Partner2  from '../../../assets/home/microsoft.jpg';
import { Link } from 'react-router-dom';

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
                    <img src={Partner1} alt="awsimage" className="icon"/>
                    <img src={Partner2} alt="microsoftimage" className="icon"/>
                </div>
                <div className='column'>
                    <h3>Office</h3>
                    <p>Address - HQ 5 Royle Crescent</p>
                    <p>London W13 0BH</p>
                    <p>United Kingdom</p>
                </div>
                <div className='column'>
                    <h3>Links</h3>
                    <p>Hub</p>
                    <p>
                        <Link to={'https://goagilecloud.com/'}>
                            GoAgileCloud
                        </Link>
                    </p>
                </div>
                <div className='column'>
                    <h3>Contact us</h3>
                    <p>Info@goagilecloud.com</p>
                    <p>+44 7920 461147</p>
                    <div className='icon-container'>
                        <Link to={'https://www.linkedin.com/company/mazataz-ltd/mycompany/'}>
                            <LinkedInIcon className='icon'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;