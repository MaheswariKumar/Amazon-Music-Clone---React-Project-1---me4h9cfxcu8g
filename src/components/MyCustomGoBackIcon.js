import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MyCustomGoBackIcon = (props) => {
  return (
    <SvgIcon {...props} width="12" height="7" viewBox="0 0 12 7">
      <path
        d="M11 1.25L6 6.25L1 1.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" 
      />
    </SvgIcon>
  );
};

export default MyCustomGoBackIcon;