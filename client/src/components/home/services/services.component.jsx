import { useState } from "react";

import { ReactComponent as ServicesImage1 } from '../../../assets/home/servicesImageOne.svg';
import { ReactComponent as TraingleOne } from '../../../assets/home/TriangleOne.svg';
import { ReactComponent as TraingleTwo } from '../../../assets/home/TriangleTwo.svg';

import './services.styles.scss';

const Services = () => {
    const [toggleClicked, setToggleClicked] = useState(false);
    const [selectedServiceIndex, setselectedServiceIndex] = useState(0);

    const services = [
        {
            id: '0',
            title: 'Lift and Shift',
            description: `Depending on your business’ infrastructure, cloud migration may not be as simple as shifting all
            your data at once. Don’t sweat it. GAC is well-versed in many different migration methods, including
            lift and shift. Lift and shift is a method for migrating your apps to the cloud without redesigning
            the app. Essentially, it involves lifting your application from its current platform and shifting it
            onto the cloud. It’s a cost-effective way to open the path for IT modernization.`
        },
        {
            id: '1',
            title: 'Cloud Migration',
            description: `GAC gives you a competitive edge in your industry that allows you to avoid the roadblocks and hurdles of
            cloud migration. Get in touch with GAC today to get the right strategic solution designed for your company.`
        },
        {
            id: '2',
            title: 'Proof of Concept',
            description: `GAC is proud to offer a wide range of services to plan rapidly, design, implement, deliver and host Cloud
            Proof of Concepts and pilots, delivered by experienced architects, analysts, and developers. We’re confident that the way
            in which we’ve structured our PoC services will meet the needs of your business.`
        },
    ];

    const handleClick = (e) => {
        setToggleClicked(true);
        setTimeout(() => {
            setselectedServiceIndex(e.target.dataset.id);
        }, 1500);
        setTimeout(() => {
            setToggleClicked(false);
        }, 2100);
    };

    return (
        <div id="services-section" className="services-section">
            <div className='services-section__cta cta'>
                <h1>What we do</h1>
                <p className='cta__tagline'>Prepare for an Agile Future</p>
                <p>
                    Maximize the ROI of your organization and empower your business to be more agile, responsive, and productive.
                    Embrace new intelligent technologies, automate inefficiencies and move your business forward.
                </p>
                <div className='circle circle__primary' />
                <div className='circle circle__tertiary' />
                <div className='circle circle__tertiary' />
            </div>
            <div className='image-container--triangle triangle_one'>
                <TraingleOne />
            </div>
            <div className='card-container'>
                <div className='circle circle__secondary' />
                <div className='card'>
                    <div className={`row ${toggleClicked ? 'animation' : ''}`}>
                        <div className='image-container'>
                            <ServicesImage1 />
                        </div>
                        <div className='description-container'>
                            <h3>{services[selectedServiceIndex].title}</h3>
                            <p>{services[selectedServiceIndex].description}</p>
                        </div>
                    </div>
                    <div className='toggle-card'>
                    {
                        services.map((service) => {
                            return (           
                                <div data-id={service.id} key={service.id} onClick={handleClick} className='toggle-button'></div>
                            );
                        })
                    }
                    </div>
                </div>
                <div className='circle circle__primary' />
                <div className='circle circle__tertiary' />
                <div className='circle circle__secondary right' />
            </div>
            <div className='image-container--triangle triangle_two'>
                <TraingleTwo />
            </div>
        </div>
    )
};

export default Services;