import * as React from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

function EllipseIcon(props) {
  return (
    <Svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={6}
        cy={6}
        r={5.3}
        stroke="url(#prefix__paint0_radial)"
        strokeWidth={1.4}
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(132.769 8.19 4.563) scale(16.3466)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#7012CE" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default EllipseIcon;
