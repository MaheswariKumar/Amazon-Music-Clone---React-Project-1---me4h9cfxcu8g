import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MyCustomPauseIcon = (props) => {
  return (
    <SvgIcon {...props} style={{ fontSize: '33px' }}>
      <path d="M9,22 L6,22 C5.45,22 5,21.55 5,21 L5,3 C5,2.45 5.45,2 6,2 L9,2 C9.55,2 10,2.45 10,3 L10,21 C10,21.55 9.55,22 9,22 Z M19,21 L19,3 C19,2.45 18.55,2 18,2 L15,2 C14.45,2 14,2.45 14,3 L14,21 C14,21.55 14.45,22 15,22 L18,22 C18.55,22 19,21.55 19,21 Z" fill="currentColor" />
    </SvgIcon>
  );
};

export default MyCustomPauseIcon;