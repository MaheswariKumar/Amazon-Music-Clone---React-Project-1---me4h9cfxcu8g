import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronCaretdownIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M12,16 C11.744,16 11.488,15.902 11.293,15.707 L6.293,10.707 C5.902,10.316 5.902,9.684 6.293,9.293 C6.684,8.902 7.316,8.902 7.707,9.293 L12,13.586 L16.293,9.293 C16.684,8.902 17.316,8.902 17.707,9.293 C18.098,9.684 18.098,10.316 17.707,10.707 L12.707,15.707 C12.512,15.902 12.256,16 12,16 Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default ChevronCaretdownIcon;
