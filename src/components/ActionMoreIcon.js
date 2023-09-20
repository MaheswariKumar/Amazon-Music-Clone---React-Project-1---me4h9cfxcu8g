import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ActionMoreIcon = (props) => {
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
            id="ic_action_more-a"
            d="M19,14 C17.895,14 17,13.105 17,12 C17,10.895 17.895,10 19,10 C20.105,10 21,10.895 21,12 C21,13.105 20.105,14 19,14 Z M14,12 C14,10.895 13.105,10 12,10 C10.895,10 10,10.895 10,12 C10,13.105 10.895,14 12,14 C13.105,14 14,13.105 14,12 Z M7,12 C7,10.895 6.105,10 5,10 C3.895,10 3,10.895 3,12 C3,13.105 3.895,14 5,14 C6.105,14 7,13.105 7,12 Z"
          ></path>
        </defs>
        <g fillRule="evenodd" fill="transparent">
          <rect width="24" height="24"></rect>
          <use
            fillRule="nonzero"
            xlinkHref="#ic_action_more-a"
            fill="currentColor"
          ></use>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default ActionMoreIcon;