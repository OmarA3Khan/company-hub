import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/Logo.svg';

import './navBar.styles.scss'

//NEED TO CREATE DYNAMIC LINKS FOR THE NAVBAR | THIS IS JUST TEMPORARY
const navlinks = [
    {name: 'Home', src: '#'},
    {name: 'Services', src: '#'},
    {name: 'Hub', src: '/hub'},
    {name: 'Login', src: '#'},
    {name: 'Sign Up', src: '#'},
]

const HomePageNav = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__logo-container">
                <Link>
                    <Logo />
                </Link>
            </div>
            <ul className='navbar__nav-links-container'>
                {navlinks.map((navLink, index) => <Link className='nav-link' to={navLink.src} key={index}>{navLink.name}</Link>)}
            </ul> 
        </nav>
    )
}

export default HomePageNav;