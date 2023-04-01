import {Link} from 'react-router-dom';

import Icon from '../icon/icon.component';

import './button.styles.scss';

const Button = ({ url, icon, text }) => {
    if (url) {
      return (
        <button className='button'>
            <Link className='button__link' to={ url }>
                <span className='button__text'>{ text }</span>
                { 
                icon ?
                    <Icon color={'#4186ffB3'}
                        className='button__icon'
                        icon={icon}
                        size={24}/>
                    : null
                }
            </Link>
        </button>
      );
    } else {
        return (
            <button className='button'>
                <span className='button__text'>{ text }</span>
                { 
                icon ?
                    <Icon color={'#4186ffB3'}
                        className='button__icon'
                        icon={icon}
                        size={24}/>
                    : null
                }
            </button>
        );
    }
};

export default Button;