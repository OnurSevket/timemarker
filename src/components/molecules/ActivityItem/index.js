import React from "react";
import { theme } from "../../../styles/theme";

import {
  ActItemTitleText,
  CircleItem,
  DesktopIcon,
  FlexBox,
  MaxHeightBox,
  MaxWidthBox,
  PlayIcon,
  Tag,
  TagText,
} from "../../atoms";

export const ActivityItem = ({ ...props }) => {
  return (
    <MaxWidthBox
      direction={"row"}
      mainAxis={"space-between"}
      crossAxis={"flex-start"}
      height={84}
      radius={16}
      pT={16}
      pB={16}
      pL={16}
      pR={16}
      mB={16}
      color={theme.colors.White}
    >
      <FlexBox
        direction={"row"}
        mainAxis={"flex-start"}
        crossAxis={"flex-start"}
      >
        <FlexBox crossAxis={"flex-start"} mainAxis={"flex-start"}>
          <CircleItem>
            <DesktopIcon />
          </CircleItem>
        </FlexBox>
        <MaxHeightBox
          crossAxis={"flex-start"}
          mainAxis={"space-between"}
          mL={16}
        >
          <ActItemTitleText>UI Design</ActItemTitleText>
          <FlexBox
            direction={"row"}
            mainAxis={"space-between"}
            crossAxis={"flex-start"}
          >
            <Tag
              text={props.tag[0]}
              textColor={theme.colors.Red}
              color={theme.colors.RedLight}
            />
            <MaxWidthBox crossAxis={"flex-start"} mL={8} autoWidth>
              <Tag
                text={props.tag[1]}
                textColor={theme.colors.Purple}
                color={theme.colors.PurpleLight}
              />
            </MaxWidthBox>
          </FlexBox>
        </MaxHeightBox>
      </FlexBox>
      <MaxHeightBox mainAxis={"space-between"} crossAxis={"flex-end"}>
        <TagText color={theme.colors.Grey2}>{props.time}</TagText>
        <PlayIcon />
      </MaxHeightBox>
    </MaxWidthBox>
  );
};

/*export const TestBox = styled(FlexBox)`
  background: #008800;
`;
export const MaxHeigsssshtBox = styled(FlexBox)`
  height: 100%;
  ${(props) =>
    props.color != undefined &&
    `
        background: #008800;
    `}
`;

export const MaxHeightssssMLBox = styled(MaxHeightBox)`
  margin-left: 16px;
  /!*  background: #008800;*!/
`;*/
