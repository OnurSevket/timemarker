import React from "react";
import { TagText } from "../../atoms/Text";
import { MaxWidthBox } from "../StyledBox";

export const Chart = ({ ...props }) => {
  return (
    <MaxWidthBox
      // height={24}
      direction={"row"}
      pT={5}
      pB={5}
      pR={8}
      pL={8}
      radius={6}
      color={props.color}
      autoWidth
    >
      <TagText color={props.textColor}>{props.text}</TagText>
    </MaxWidthBox>
  );
};
//[8,5,5,8]
