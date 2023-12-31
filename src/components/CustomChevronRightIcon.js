import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const CustomChevronRightIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <defs>
      <path
        id="ic_chevron_caretright-a"
        d="M10,18 C9.744,18 9.488,17.902 9.293,17.707 C8.902,17.316 8.902,16.684 9.293,16.293 L13.586,12 L9.293,7.707 C8.902,7.316 8.902,6.684 9.293,6.293 C9.684,5.902 10.316,5.902 10.707,6.293 L15.707,11.293 C16.098,11.684 16.098,12.316 15.707,12.707 L10.707,17.707 C10.512,17.902 10.256,18 10,18 Z"
      ></path>
    </defs>
    <use xlinkHref="#ic_chevron_caretright-a" fill="currentColor"></use>
  </SvgIcon>
);

export default CustomChevronRightIcon;