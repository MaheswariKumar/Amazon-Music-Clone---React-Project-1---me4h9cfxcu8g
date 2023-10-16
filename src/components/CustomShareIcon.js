import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const CustomShareIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <defs>
      <path
        id="ic_action_shareandroid-a"
        d="M18,15 C16.798,15 15.732,15.542 14.999,16.381 L7.91,12.836 C7.967,12.566 8,12.287 8,12 C8,11.713 7.967,11.434 7.909,11.164 L14.998,7.619 C15.732,8.458 16.798,9 18,9 C20.209,9 22,7.209 22,5 C22,2.791 20.209,1 18,1 C15.791,1 14,2.791 14,5 C14,5.287 14.033,5.566 14.091,5.836 L7.001,9.381 C6.268,8.542 5.202,8 4,8 C1.791,8 0,9.791 0,12 C0,14.209 1.791,16 4,16 C5.202,16 6.268,15.458 7.001,14.619 L14.09,18.164 C14.033,18.434 14,18.713 14,19 C14,21.209 15.791,23 18,23 C20.209,23 22,21.209 22,19 C22,16.791 20.209,15 18,15 Z"
      ></path>
    </defs>
    <use xlinkHref="#ic_action_shareandroid-a" fill="currentColor"></use>
  </SvgIcon>
);

export default CustomShareIcon;