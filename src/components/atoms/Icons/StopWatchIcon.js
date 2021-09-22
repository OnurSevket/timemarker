import * as React from "react";
import Svg, { Path } from "react-native-svg";

function StopWatchIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 9.063V5.937M10 3.438v-.626M5.156 5.156l-.468-.468"
        stroke="#FAFAFF"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 11.875a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        stroke="#FAFAFF"
        strokeWidth={1.4}
        strokeMiterlimit={10}
      />
      <Path
        d="M10 3.75a6.875 6.875 0 100 13.75 6.875 6.875 0 000-13.75z"
        stroke="#FAFAFF"
        strokeWidth={1.4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default StopWatchIcon;
