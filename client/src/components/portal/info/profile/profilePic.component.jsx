import React from 'react';
import './profilePic.style.scss';

const ProfilePicture = ({ imageSource, altText }) => {
  return (
    <div
      className="profile-picture"
      style={{ backgroundImage: `url(${imageSource})` }}
      alt={altText}>

    </div>
  );
};

export default ProfilePicture;
