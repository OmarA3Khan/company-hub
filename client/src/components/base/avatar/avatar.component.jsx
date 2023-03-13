import './avatar.styles.scss';
// import avatarImg from '../../../assets/avatarTest.jpg';

const Avatar = ({ name, imgSrc }) => {
    const initials = name ? name.split(' ').reduce((accumulator, currentValue) => accumulator + currentValue[0], '') : 'NA';

    return (
        imgSrc ?
            <img className='avatar avatar-img' src={imgSrc} alt="avatar" />
            : 
            <div className='avatar avatar-text'>
                <span>{initials}</span>
            </div>
    )
};

export default Avatar;
