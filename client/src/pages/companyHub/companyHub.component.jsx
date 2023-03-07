import { Outlet } from 'react-router-dom';

import LeftHandNav from '../../components/leftHandNav/leftHandNav.component';
import Header from '../../components/header/header.component';

import './companyHub.styles.scss';

const CompanyHub = () => {
    return (
        <div className='company-hub'>
            <Header />
            <div className='company-hub__row'>
                <LeftHandNav />
                <div className='company-hub__outlet-container'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default CompanyHub;