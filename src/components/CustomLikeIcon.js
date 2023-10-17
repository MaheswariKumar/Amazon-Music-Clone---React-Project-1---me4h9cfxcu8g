import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const CustomLikeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <defs>
      <path
        id="ic_action_like-a"
        d="M20.999,9 L17,9 L16.59,9 C15.87,9 15.42,8.24 15.77,7.61 L15.92,7.34 C16.46,6.35 16.77,5.24 16.72,4.12 C16.68,3.37 16.54,2.63 16.3,1.91 C16.12,1.37 15.61,1 15.04,1 C14.43,1 13.9,1.42 13.75,2.01 L13.39,3.45 C13.13,4.47 12.66,5.42 12,6.24 L9.71,9.12 C9.26,9.67 8.58,10 7.87,10 C7.39,10 7,10.39 7,10.87 L7,21 C7,21.55 7.45,22 8,22 L12.707,22 L16,22 L18.229,22 C19.107,22 19.882,21.427 20.141,20.588 L22.91,11.588 C23.306,10.302 22.344,9 20.999,9 Z"
      ></path>
    </defs>
    <g fillRule="evenodd" fill="transparent">
      <rect width="24" height="24"></rect>
      <path fill="currentColor" d="M5,23 L2,23 C1.448,23 1,22.552 1,22 L1,10 C1,9.448 1.448,9 2,9 L5,9 C5.552,9 6,9.448 6,10 L6,22 C6,22.552 5.552,23 5,23 Z" opacity=".5"></path>
      <use xlinkHref="#ic_action_like-a" fill="currentColor"></use>
    </g>
  </SvgIcon>
);

export default CustomLikeIcon;