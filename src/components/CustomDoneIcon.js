import React from 'react';

const CustomDoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <path
        id="ic_action_done-a"
        d="M9,19 C8.744,19 8.488,18.902 8.293,18.707 L2.293,12.707 C1.902,12.316 1.902,11.684 2.293,11.293 C2.684,10.902 3.316,10.902 3.707,11.293 L9,16.586 L20.293,5.293 C20.684,4.902 21.316,4.902 21.707,5.293 C22.098,5.684 22.098,6.316 21.707,6.707 L9.707,18.707 C9.512,18.902 9.256,19 9,19 Z"
      ></path>
    </defs>
    <g fillRule="evenodd" fill="transparent">
      <rect width="24" height="24"></rect>
      <use xlinkHref="#ic_action_done-a" fill="currentColor"></use>
    </g>
  </svg>
);

export default CustomDoneIcon;