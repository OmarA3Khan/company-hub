import { NavLink } from 'react-router-dom';

import Icon from '../base/icon/icon.component';

import './leftHandNav.styles.scss';

const defaultNavigationUrls = [
  {
    label: 'Hub',
    src: 'hub',
    icon: 'home',
    id: 'nav-hub',
  },
  {
    label: 'User Directory',
    src: 'user-directory',
    icon: 'users',
    id: 'nav-user-directory',
  },
  {
    label: 'Project Directory',
    src: `project-directory`,
    icon: 'project',
    id: 'nav-project-directory',
  },
  {
    label: 'Communications',
    src: `communications`,
    icon: 'communication',
    id: 'nav-communications',
  },
  {
    label: 'Academy',
    src: `academy`,
    icon: 'academicCap',
    id: 'nav-academy',
  },
  {
    label: 'My Profile',
    src: 'profile',
    icon: 'user',
    id: 'nav-profile',
  },
];

const LeftHandNav = () => {
  return (
    <nav className='left-hand-nav'>
      <ul className='left-hand-nav__items'>
        {
          defaultNavigationUrls.map((navLink) => {
            return(
              <li className='left-hand-nav__items__nav-item' key={navLink.id}>
                {/* <Link className='nav-link' to={navLink.src}>
                  <Icon icon={navLink.icon} size={32} /> 
                  <span>{navLink.label}</span>
                </Link> */}
                <NavLink
                  className='nav-link'
                  activeClassName='active' // add the 'active' class when the link is active
                  to={navLink.src} >
                    <span className='pipe'></span>
                    <Icon icon={navLink.icon} size={32} />
                    <span>{navLink.label}</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
};

export default LeftHandNav;