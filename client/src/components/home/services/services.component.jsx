import { useState } from "react";
import { ReactComponent as TraingleOne } from '../../../assets/home/TriangleOne.svg';
import { ReactComponent as TraingleTwo } from '../../../assets/home/TriangleTwo.svg';

import './services.styles.scss';

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 0,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Lift and Shift',
            description: `Depending on your business’ infrastructure, cloud migration may not be as simple as shifting all
            your data at once. Don’t sweat it. GAC is well-versed in many different migration methods, including
            lift and shift. Lift and shift is a method for migrating your apps to the cloud without redesigning
            the app. Essentially, it involves lifting your application from its current platform and shifting it
            onto the cloud. It’s a cost-effective way to open the path for IT modernization.`
        },
        {
            id :1,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cloud Migration',
            description: `GAC gives you a competitive edge in your industry that allows you to avoid the roadblocks and hurdles of
            cloud migration. Get in touch with GAC today to get the right strategic solution designed for your company.`
        },
        {
            id: 2,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Proof of Concept',
            description: `GAC is proud to offer a wide range of services to plan rapidly, design, implement, deliver and host Cloud
            Proof of Concepts and pilots, delivered by experienced architects, analysts, and developers. We’re confident that the way
            in which we’ve structured our PoC services will meet the needs of your business.`
        },
        {
            id: 3,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cloud Deployment',
            description: `If you want to gain a competitive edge in the market your business operates in, you need to have the right
            cloud deployment strategy. Your cloud deployment model will dictate the access to IT resources and services you’ll have, 
            making your business both flexible and agile. GAC has extensive knowledge and experience in devising bespoke cloud deployment
            models that will fit the needs of many different businesses.`
        },
        {
            id: 4,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cloud Cost Optimization',
            description: `Let’s face it—investing in new technologies isn’t cheap. However, at GAC, we want to help you make the most out of 
            your budget. That’s where cloud cost optimization comes into play. Our unique approach to a unique approach to cloud cost optimization
            can help you keep costs in check while ensuring that resources are properly allocated.`
        },
        {
            id: 5,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cloud Architecture and Design',
            description: `When you look at the reasons behind most cloud project failures, it boils down to missing architecture or bad design. 
            If you don’t properly create architecture and design for your cloud-based app, your project will likely fail, too, causing the dreams
            you have for your business to a crashing halt. But, many don’t know where to start. If you’re in that same boat, don’t worry. We’re here
            to help. GAC has experience working with complex cloud architectures and is able to provide your company with a design and architecture 
            that supports your business and its goals.`
        },
        {
            id: 6,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cloud Project Management',
            description: `Cloud technology solutions are often complex and involve many different steps. That fact alone proves the need for effective
            cloud project management services. At GAC, we offer cloud-based project management services that allow our teams to stay on track and also
            allow our partners (that’s you) to see how your project is progressing!`
        },
        {
            id: 7,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Multi Cloud Platform',
            description: `A multi-cloud platform involves a business using more than one different type of cloud platform to conduct its business.
            GAC can support your decision to utilize a multi-cloud platform to leverage multiple different platforms for orchestrated and independent
            tasks. We can work with you to determine what the most effective multi-cloud platform strategy would be.`
        },
        {
            id: 8,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Asset Management',
            description: `If you’re looking for a better way to manage your assets and ensure their accuracy, look no further. GAC’s cloud-based asset 
            management services are just what you’re looking for and will help you get the job done. With our cloud-based asset management services, 
            you’ll be able to save time and money, gather better data, eliminate lost records, secure your data, and access all your data from one central point.`
        },
        {
            id: 9,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cloud Native Services',
            description: `GAC’s cloud-native services enable on-prem tooling and automation required for the development and management of scale-out applications.
            Creating a cloud-model app development experience on-prem is a complex task, involving expertise, labor, and plenty of automation, but our cloud-native 
            services can simplify that process for you and your business.`
        },
        {
            id: 10,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Governance',
            description: `Cloud governance is all about balancing collaboration and control. It differs slightly from cloud management. However, it often involves quite
            a bit of administrative work, which many businesses aren’t able to do themselves. GAC can provide top-notch cloud governance services, ensuring that security,
            compliance, and project requirements are met all along the way.`
        },
        {
            id: 11,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Site Survey',
            description: `A site survey allows you to view wireless predictive planning, which ensures an optimum connection for quality data. GAC can provide you with 
            bespoke site survey strategies and deployment to fit your needs.`
        },
        {
            id: 12,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cyber Security',
            description: `Unfortunately, in today’s world, cybercriminals are always on the prowl. That’s why there’s such a great need for quality cybersecurity. GAC
            is able to provide standard state-of-the-art cybersecurity offerings, as well as cloud security offerings. Our cloud security offerings include the utilization
            of tech and policies to protect your data and applications. Contact us so we can further discuss the best options for you.`
        },
        {
            id: 13,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Cloud monitoring and 24/7 managed services',
            description: `Monitoring and evaluation in cloud computing are essential processes. These services are what determines a company’s efficiency and security in 
            regards to their applications. Monitoring services can also detect and eliminate failures to ensure that no part of an application is a failure or is vulnerable. 
            GAC’s cloud monitoring services take the work off your shoulders, giving you back valuable time in your day. We’re here to provide the service and monitoring you need,
            don’t you worry.`
        },
        {
            id: 14,
            image: '../../assests/home/servicesImg/cloud_deploy.svg',
            title: 'Legacy Hardware Decommissioning',
            description: `It’s often not a concept that’s at the forefront of people’s minds, but it’s something that’s necessary—legacy hardware decommissioning. This process involves
            becoming potentially sensitive data in a responsible manner. Let us handle that so you don’t have to. GAC’s legacy hardware decommissioning services are renowned.`
        },
        
    ];

    
  const goToSlide = (slideId) => {
    setCurrentSlide(slideId);
  };

    return (
        <div className="services-section">
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

                    <div className="slide-container">
                        {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={`slide ${currentSlide === slide.id ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="caption">{slide.caption}</div>
                        </div>
                        ))}
                    </div>

                    <div className="controls">
                        {slides.map((slide) => (
                        <button
                            key={slide.id}
                            className={`control ${currentSlide === slide.id ? 'active' : ''}`}
                            onClick={() => goToSlide(slide.id)}
                        >
                            {slide.id + 1}
                        </button>
                        ))}
                    </div>
            <div className='image-container--triangle triangle_two'>
                <TraingleTwo />
            </div>
        </div>
    </div>
    )
};

export default Services;