

import { ReactComponent as BrandingImageOne } from '../../../assets/triangle_city.svg';
import { ReactComponent as BrandingImageTwo } from '../../../assets/brandImageTwo.svg';

import './branding.styles.scss'

const Branding = () => {
    return (
        <div className="branding-section">
            <div className="branding-section__one row">
                <div className="column">
                   <h1 className='line1'>Your Growth</h1>
                   <h1 className='line2'>Our Priority</h1>
                   <p>
                   A team of specialists working relentlessly for clients around the globe with a monastic focus on growth
                   using agile techniques in DevOps
                   </p>
                   <button>Talk To Our Experts</button>
                </div>
                <div className="column">
                    <div className='image-container-one'>
                        <BrandingImageOne />
                    </div>
                </div>
            </div>
            <div className="branding-section__two row">
                <div className="column"> 
                    <div className='image-container1'>
                        <BrandingImageTwo />
                    </div>
                </div>
                <div className="column">
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