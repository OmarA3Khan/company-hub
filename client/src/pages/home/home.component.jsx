import HomePageNav from '../../components/home/navBar/navBar.component';
import Branding from '../../components/home/branding/branding.component';
import Services from '../../components/home/services/services.component';
import Footer from '../../components/home/footer/footer.component';
import { ReactComponent as BlueCLoud } from '../../assets/blueCloud.svg';
import Info from '../../components/portal/info/info-row.component';

import './home.styles.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__branding-image-container'>
                <BlueCLoud />
            </div>
            <HomePageNav />
            <div className='home__content-container'>
                <Branding />
                <Services />
            </div>
            <Footer />
            <div>
                <Info />
            </div>
        </div>
    );
};

export default Home;