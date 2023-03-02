import './services.styles.scss';
import { ReactComponent as ServicesImage1 } from '../../../assets/servicesImage1.svg';

const Services = () => {
    return (
        <div className="services-section">
            <div className='call-to-action'>
                <h1>What we do</h1>
                <p className='forcolor'>Prepare for an Agile Future</p>
                <p>
                    Maximize the ROI of your organization and empower your business to be more agile, responsive, and productive.
                    Embrace new intelligent technologies, automate inefficiencies and move your business forward.
                </p>
            </div>
            <div className='image-container'>
                {/* <div className='triangle'></div> */}
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className='row'>
                        <div className='image-container'>
                            <ServicesImage1 />
                        </div>
                        <div className='description-container'>
                            <h3>Lift and Shift</h3>
                            <p>Depending on your business’ infrastructure, cloud migration may not be as simple as shifting all
                                your data at once. Don’t sweat it. GAC is well-versed in many different migration methods, including
                                lift and shift. Lift and shift is a method for migrating your apps to the cloud without redesigning
                                the app. Essentially, it involves lifting your application from its current platform and shifting it
                                onto the cloud. It’s a cost-effective way to open the path for IT modernization.
                            </p>
                        </div>
                    </div>
                    <div className='toggle-card'>
                        <div className='rectangle'></div>
                        <div className='rectangle'></div>
                        <div className='rectangle'></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;