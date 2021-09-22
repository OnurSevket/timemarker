import React from "react";
import { CurrentTaskTimeText, CurrentTaskTitleText } from "../../atoms/Text";
import { HeightStyledBox, MaxWidthBox, RightArrowIcon } from "../../atoms";
import { theme } from "../../../styles/theme";
import EllipseIcon from "../../atoms/Icons/EllipseIcon";
import { Button } from "../../atoms/Button";
import { useNavigation } from "@react-navigation/native";

export const CurrentTask = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <HeightStyledBox
      pT={24}
      pB={24}
      pL={16}
      pR={16}
      color={theme.colors.Black}
      mainAxis={"space-between"}
      radius={12}
      height={114}
    >
      <MaxWidthBox
        direction={"row"}
        mainAxis={"space-between"}
        crossAxis={"flex-start"}
      >
        <CurrentTaskTimeText>{props.time}</CurrentTaskTimeText>
        <Button onPress={() => navigation.navigate("Timer")}>
          <RightArrowIcon />
        </Button>
      </MaxWidthBox>

      <MaxWidthBox direction={"row"} mainAxis={"flex-start"}>
        <EllipseIcon />
        <MaxWidthBox crossAxis={"flex-start"} mL={12}>
          <CurrentTaskTitleText>{props.name}</CurrentTaskTitleText>
        </MaxWidthBox>
      </MaxWidthBox>
    </HeightStyledBox>
  );
};
