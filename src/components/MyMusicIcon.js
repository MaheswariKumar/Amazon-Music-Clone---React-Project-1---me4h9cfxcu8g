import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MyMusicIcon = (props) => {
  return (
    <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <path id="ic_navigation_mymusic" fill-rule="nonzero" d="M9,15 L9,20 C9,21.105 8.105,22 7,22 C5.895,22 5,21.105 5,20 L5,15 C5,13.895 5.895,13 7,13 C8.105,13 9,13.895 9,15 Z M17,13 C15.895,13 15,13.895 15,15 L15,20 C15,21.105 15.895,22 17,22 C18.105,22 19,21.105 19,20 L19,15 C19,13.895 18.105,13 17,13 Z M22,15 L22,13 C22,7.486 17.514,3 12,3 C6.486,3 2,7.486 2,13 L2,15 C1.36,15.64 1,16.509 1,17.414 L1,17.586 C1,18.491 1.36,19.36 2,20 C2,20.553 2.448,21 3,21 C3.552,21 4,20.553 4,20 L4,13 C4,8.589 7.589,5 12,5 C16.411,5 20,8.589 20,13 L20,20 C20,20.553 20.447,21 21,21 C21.553,21 22,20.553 22,20 C22.64,19.36 23,18.491 23,17.586 L23,17.414 C23,16.509 22.64,15.64 22,15 Z"></path>
            </defs>
            <g fill-rule="evenodd" fill="transparent">
                <rect width="24" height="24"></rect>
                <use xlinkHref="#ic_navigation_mymusic" fill="currentColor"></use>
            </g>
        </svg>
    </SvgIcon>
  );
};

export default MyMusicIcon;
