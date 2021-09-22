import React from "react";
import { theme } from "../../../styles/theme";
import { TimeDurationHMText, TimeDurationText } from "../../atoms/Text";
import { FlexBox, StyledBox } from "../../atoms";

export const ReportItem = ({ ...props }) => {
  return (
    <StyledBox
      mainAxis={"space-between"}
      crossAxis={"flex-start"}
      height={132}
      width={164}
      radius={16}
      padding={16}
      color={theme.colors.Background2}
    >
      <FlexBox direction={"row"}>
        <StyledBox
          marginR={12}
          height={32}
          width={32}
          radius={8}
          color={props.iconColor}
        >
          {props.icon}
        </StyledBox>
        <FlexBox flex={3}>
          <TimeDurationText>{props.title}</TimeDurationText>
        </FlexBox>
      </FlexBox>
      <TimeDurationHMText>
        {props.definition}
        {/*                1<TimeDurationTimeSymbolText>h</TimeDurationTimeSymbolText> 46
                <TimeDurationTimeSymbolText>m</TimeDurationTimeSymbolText>*/}
      </TimeDurationHMText>
    </StyledBox>
  );
};
