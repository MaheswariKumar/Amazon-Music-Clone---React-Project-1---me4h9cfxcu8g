import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MyCustomVolumeIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 36 36">
      <use className="ytp-svg-shadow" xlinkHref="#ytp-id-14"></use>
      <use className="ytp-svg-shadow" xlinkHref="#ytp-id-15"></use>
      <defs>
        <clipPath id="ytp-svg-volume-animation-mask">
          <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
          <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
          <path className="ytp-svg-volume-animation-mover" d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path>
        </clipPath>
        <clipPath id="ytp-svg-volume-animation-slash-mask">
          <path className="ytp-svg-volume-animation-mover" d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path>
        </clipPath>
      </defs>
      <path className="ytp-svg-fill ytp-svg-volume-animation-speaker" clipPath="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="ytp-id-14"></path>
      <path className="ytp-svg-fill ytp-svg-volume-animation-hider" clipPath="url(#ytp-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="ytp-id-15" style={{ display: 'none' }}></path>
    </SvgIcon>
  );
};

export default MyCustomVolumeIcon;