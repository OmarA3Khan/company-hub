import { ReactComponent as LinkedInIcon } from '../../../assets/icons/linkedIn.svg';
import { ReactComponent as Partner1 } from '../../../assets/partner-aws.svg';
import { ReactComponent as Partner2 } from '../../../assets/partner-microsoft.svg';
import { Link } from 'react-router-dom';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__company-vision'>
                <h2>Our Visoin</h2>
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
                    <p>Home</p>
                    <p>Services</p>
                    <p>
                        <Link to={'https://goagilecloud.com/'}>
                            GoAgileCloud Home Page
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