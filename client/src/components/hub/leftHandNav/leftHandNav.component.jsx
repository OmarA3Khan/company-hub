import { NavLink } from 'react-router-dom';

import Icon from '../../base/icon/icon.component';

import './leftHandNav.styles.scss';

const defaultNavigationUrls = [
  {
    label: 'Hub',
    src: '',
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
                <NavLink
                  end
                  className={['nav-link', ({isActive}) => (isActive ? "active" : '')].join(' ')}
                  to={navLink.src} >
                    <span className='pipe'></span>
                    <Icon className='icon' icon={navLink.icon} size={24} />
                    <span className='label'>{navLink.label}</span>
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