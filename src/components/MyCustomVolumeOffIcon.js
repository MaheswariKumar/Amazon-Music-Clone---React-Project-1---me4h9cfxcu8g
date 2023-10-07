import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MyCustomVolumeOffIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <defs>
        <path id="ic_playback_volumeoff-a" d="M17.447,2.106 C17.306,2.035 17.153,2 17,2 C16.787,2 16.576,2.068 16.4,2.2 L10,7 L6,7 C4.9,7 4,7.9 4,9 L4,15 C4,16.1 4.9,17 6,17 L10,17 L16.4,21.8 C16.576,21.932 16.788,22 17,22 C17.152,22 17.306,21.965 17.447,21.894 C17.786,21.725 18,21.379 18,21 L18,3 C18,2.621 17.786,2.275 17.447,2.106 Z"></path>
      </defs>
      <use xlinkHref="#ic_playback_volumeoff-a" fill="currentColor"></use>
    </SvgIcon>
  );
};

export default MyCustomVolumeOffIcon;