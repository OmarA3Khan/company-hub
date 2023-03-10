
import HomePageNav from '../../components/home/navBar/navBar.component';
import Branding from '../../components/home/branding/branding.component';
import Services from '../../components/home/services/services.component';
import Footer from '../../components/home/footer/footer.component';
<<<<<<< Updated upstream
// import { ReactComponent as BlueCLoud } from '../../assets/blueCloud.svg';
=======
import { ReactComponent as BlueCLoud } from '../../assets/blueCloud.svg';
import ParentDash from '../../components/parentDashboard/parentDashboard.component';


>>>>>>> Stashed changes

import './home.styles.scss';


const Home = () => {
    return (
        <div className='home'>
            <HomePageNav />
            <Branding />
            <Services />
            <Footer />
<<<<<<< Updated upstream
            {/* <div className='branding-image-container'>
                <BlueCLoud />
            </div> */}
=======
            <ParentDash />
>>>>>>> Stashed changes
        </div>
    );
};

export default Home;