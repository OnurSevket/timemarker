import React from "react";
import { theme } from "../../../styles/theme";
import { TimerScreenHeaderText } from "../../atoms/Text";
import { ArrowBackIcon, Button, MaxWidthBox, Tag } from "../../atoms";

export const TimerHeader = ({ ...props }) => {
  return (
    <MaxWidthBox
      direction={"row"}
      mainAxis={"space-between"}
      color={theme.colors.White}
      pL={16}
      pR={16}
      pT={30} //TODO manuel bu düzeltileckSafeAreaView vs
    >
      <Button onPress={() => props.navigation.goBack()}>
        <ArrowBackIcon />
      </Button>
      <TimerScreenHeaderText>{"Rasion Project"}</TimerScreenHeaderText>
      <Tag
        text={"Work"}
        textColor={theme.colors.Red}
        color={theme.colors.RedLight}
      />
    </MaxWidthBox>
  );
};
