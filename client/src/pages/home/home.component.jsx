
import HomePageNav from '../../components/home/navBar/navBar.component';
import Branding from '../../components/home/branding/branding.component';
import Services from '../../components/home/services/services.component';
// import { ReactComponent as BlueCLoud } from '../../assets/blueCloud.svg';

import './home.styles.scss';

const Home = () => {
    return (
        <div className='home'>
            <HomePageNav />
            <Branding />
            <Services />
            {/* <div className='branding-image-container'>
                <BlueCLoud />
            </div> */}
        </div>
    );
};

export default Home;