import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const CustomPlayIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <defs>
      <path
        id="ic_playback_play-a"
        d="M21.54933,11.208 L7.32711083,2.131 C7.05155533,1.955 6.7155554,1.957 6.44177768,2.136 C6.16799996,2.315 6,2.644 6,3 L6,21 C6,21.354 6.16711108,21.683 6.43911102,21.862 C6.57777765,21.954 6.73333318,22 6.8888887,22 C7.038222,22 7.18666641,21.958 7.32177749,21.873 L21.5439967,12.951 C21.8239966,12.775 21.9991077,12.442 22,12.081 C22.0008855,11.72 21.8293299,11.386 21.54933,11.208 Z"
      ></path>
    </defs>
    <use xlinkHref="#ic_playback_play-a" fill="currentColor"></use>
  </SvgIcon>
);

export default CustomPlayIcon;