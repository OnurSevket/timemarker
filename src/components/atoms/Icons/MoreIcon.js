import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MoreIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 10a2 2 0 100 4 2 2 0 000-4zm-7 0a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z"
        fill="#828282"
      />
    </Svg>
  );
}

export default MoreIcon;
