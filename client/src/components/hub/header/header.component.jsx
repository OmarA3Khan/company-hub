import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/home/Logo-sm.svg';

import Icon from '../../base/icon/icon.component';
import Avatar from '../../base/avatar/avatar.component';
// import HeaderUtility from '../headerUtility/headerUtility.component';

import './header.styles.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to={'/'}>
                <Logo className="header__logo" />
            </Link>
            <div className='header__greeting'>
                <h3>Hi Joseph!</h3>
                <p>Welcome to your dashboard</p>
            </div>
            {/* TODO: MAKE THE HEADER UTILITY SECTION A DYNAMIC COMPONENT */}
            <div className='header__utilities-container'>
                <Icon className='icon' icon={'bell'} size={24} />
                <Avatar />
                <span className='chevron bottom'></span>
            </div>
        </header>
    )
};

export default Header;