import React from "react";
import { theme } from "../../../styles/theme";
import { TimerScreenHeaderText } from "../../atoms/Text";
import { ArrowBackIcon, Button, MaxWidthBox } from "../../atoms";

export const ReportHeader = ({ ...props }) => {
  return (
    <MaxWidthBox
      direction={"row"}
      mainAxis={"flex-start"}
      // crossAxis={"flex-start"}
      color={theme.colors.White}
      pL={16}
      pR={16}
      pT={30} //TODO manuel bu düzeltileckSafeAreaView vs
    >
      <Button onPress={() => props.navigation.goBack()}>
        <ArrowBackIcon />
      </Button>
      <TimerScreenHeaderText mL={63}>{"My Productivity"}</TimerScreenHeaderText>
    </MaxWidthBox>
  );
};
