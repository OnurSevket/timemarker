import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowBackIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.438 18.75L4.688 12l6.75-6.75M5.625 12h13.688"
        stroke="#070417"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowBackIcon;
