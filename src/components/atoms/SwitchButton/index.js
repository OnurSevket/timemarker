import React from "react";
import { HeightStyledBox, MaxHeightCustomWidthBox } from "../StyledBox";
import { theme } from "../../../styles/theme";
import { SwitchText } from "../Text";

export const SwitchButton = ({ ...props }) => {
  return (
    <HeightStyledBox
      height={44}
      direction={"row"}
      mainAxis={"space-between"}
      mT={40}
      mB={24}
      mR={48}
      mL={48}
      pT={4}
      pB={4}
      pR={4}
      pL={4}
      radius={10}
      color={theme.colors.Button}
      autoWidth
    >
      <MaxHeightCustomWidthBox width={132}>
        <SwitchText opacity={0.4}>{"Day"}</SwitchText>
      </MaxHeightCustomWidthBox>

      <MaxHeightCustomWidthBox
        radius={8}
        color={theme.colors.White}
        width={132}
      >
        <SwitchText>{"Week"}</SwitchText>
      </MaxHeightCustomWidthBox>
    </HeightStyledBox>
  );
};
//[8,5,5,8]
/* Week */

// position: absolute;
// width: 39px;
// height: 20px;
// left: 236px;
// top: 316px;
//
// font-family: Rubik;
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 18px;
// /* or 112% */
//
// color: #070417;
//
// opacity: 0.4;
