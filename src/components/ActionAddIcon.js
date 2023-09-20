import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ActionAddIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <path
            id="ic_action_add-a"
            d="M21,11 L13,11 L13,3 C13,2.448 12.552,2 12,2 C11.448,2 11,2.448 11,3 L11,11 L3,11 C2.448,11 2,11.448 2,12 C2,12.552 2.448,13 3,13 L11,13 L11,21 C11,21.553 11.448,22 12,22 C12.552,22 13,21.553 13,21 L13,13 L21,13 C21.552,13 22,12.552 22,12 C22,11.448 21.552,11 21,11 Z"
          ></path>
        </defs>
        <g fillRule="evenodd" fill="transparent">
          <rect width="24" height="24"></rect>
          <use
            xlinkHref="#ic_action_add-a"
            fill="currentColor"
          ></use>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default ActionAddIcon;