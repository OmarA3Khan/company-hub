import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import './header.styles.scss'

const navlinks = [
    {name: 'Home', src: '#'},
    {name: 'Services', src: '#'},
    {name: 'Hub', src: '/hub'},
]

const Header = () => {
    return (
        <header className="header">
            <div className="header__container-left">
                <Link>
                    <Logo />
                </Link>
                <h3>Hi Joseph</h3>
                <p>Welcome to your dashboard</p>
            </div>
            <ul className='header__container-right'>
                {navlinks.map((navLink, index) => <Link className='nav-link' to={navLink.src} key={index}>{navLink.name}</Link>)}
            </ul>
        </header>
    )
};

export default Header;