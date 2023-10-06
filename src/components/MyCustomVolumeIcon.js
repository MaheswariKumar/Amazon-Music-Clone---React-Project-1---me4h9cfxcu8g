import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MyCustomVolumeIcon = (props) => {
  return (
    <SvgIcon {...props} style={{ fontSize: 24, color: 'white' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <path id="ic_playback_volumeon-a" d="M14.447,2.106 C14.306,2.035 14.153,2 14,2 C13.787,2 13.576,2.068 13.4,2.2 L7,7 L3,7 C1.9,7 1,7.9 1,9 L1,15 C1,16.1 1.9,17 3,17 L7,17 L13.4,21.8 C13.576,21.932 13.788,22 14,22 C14.152,22 14.306,21.965 14.447,21.894 C14.786,21.725 15,21.379 15,21 L15,3 C15,2.621 14.786,2.275 14.447,2.106 Z"></path>
        </defs>
        <g fill-rule="evenodd" fill="transparent">
          <rect width="24" height="24"></rect>
          <path fill="#FFF" fill-rule="nonzero" d="M18.481,18.999 C18.481,18.775 18.556,18.549 18.711,18.363 C21.762,14.676 21.762,9.323 18.711,5.637 C18.359,5.212 18.419,4.581 18.844,4.229 C19.271,3.877 19.902,3.937 20.253,4.362 C23.915,8.786 23.916,15.211 20.253,19.636 C19.901,20.062 19.27,20.122 18.845,19.77 C18.605,19.573 18.481,19.287 18.481,18.999 Z M16.172,16.82 C16.626,17.135 17.25,17.025 17.567,16.572 C19.478,13.838 19.478,10.163 17.567,7.428 C17.25,6.975 16.626,6.864 16.172,7.18 C15.718,7.497 15.608,8.12 15.924,8.572 C17.357,10.623 17.358,13.377 15.924,15.427 C15.803,15.601 15.744,15.801 15.744,15.998 C15.743,16.314 15.893,16.626 16.172,16.82 Z" opacity=".5"></path>
          <use xlinkHref="#ic_playback_volumeon-a" fill="currentColor"></use>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default MyCustomVolumeIcon;