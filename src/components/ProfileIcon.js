import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ProfileIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M7,6 C7,3.239 9.239,1 12,1 C14.761,1 17,3.239 17,6 C17,8.761 14.761,11 12,11 C9.239,11 7,8.761 7,6 Z M21.948,18.684 C20.868,15.443 17.015,12 12,12 C6.985,12 3.131,15.443 2.051,18.684 C1.931,19.043 2.025,19.44 2.293,19.707 C4.417,21.83 7.864,23 12,23 C16.137,23 19.584,21.83 21.707,19.707 C21.975,19.439 22.068,19.043 21.948,18.684 Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default ProfileIcon;