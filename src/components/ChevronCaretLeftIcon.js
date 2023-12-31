import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function ChevronCaretLeftIcon(props) {
  return (
    <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <path id="ic_chevron_caretleft-a" d="M14,18 C13.744,18 13.488,17.902 13.293,17.707 L8.293,12.707 C7.902,12.316 7.902,11.684 8.293,11.293 L13.293,6.293 C13.684,5.902 14.316,5.902 14.707,6.293 C15.098,6.684 15.098,7.316 14.707,7.707 L10.414,12 L14.707,16.293 C15.098,16.684 15.098,17.316 14.707,17.707 C14.512,17.902 14.256,18 14,18 Z"></path>
            </defs>
            <g fill-rule="evenodd" fill="transparent">
                <rect width="24" height="24"></rect>
                <use xlinkHref="#ic_chevron_caretleft-a" fill="currentColor"></use>
            </g>
        </svg>
    </SvgIcon>
  );
}

export default ChevronCaretLeftIcon;