import { ReactComponent as BrandingImageOne } from '../../../assets/home/triangle_city.svg';
import { ReactComponent as BrandingImage } from '../../../assets/home/BrandingImg.svg';

import './branding.styles.scss'

const Branding = () => {
    return (
        <div id="branding-section" className="branding-section">
            <div className="branding-section__one row">
                <div className="branding-section__narrative">
                   <h1>Your Growth</h1>
                   <h1>Our Priority</h1>
                   <p>
                   A team of specialists working relentlessly for clients around the globe with a monastic focus on growth
                   using agile techniques in DevOps
                   </p>
                   <button className='branding-section__button'>Talk To Our Experts</button>
                </div>
                <div className="image-container">
                    <BrandingImageOne />
                </div>
            </div>
            <div className="branding-section__two row">
                <div className="branding-section__image"> 
                    <div className='image-container'>
                        <div className='rectangle' />
                        <BrandingImage />
                    </div>
                </div>
                <div className="branding-section__narrative">
                    <h1>Embrace Cloud and Internet Technology and Transform Your Enterprise</h1>
                    <p>
                        Our team of specialists strives to deliver exceptional results for clients worldwide, using a steadfast approach
                        to growth and leveraging agile methodologies in DevOps, Cloud Migration, and Proof of Concept. With a focus on
                        continuous improvement, we work tirelessly to drive progress and support our clients' success.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Branding;