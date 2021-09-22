import React from "react";
import { Button, HomeTaskTitleText, MaxWidthBox, MoreIcon } from "../../atoms";
import { theme } from "../../../styles/theme";
import { CurrentTask } from "../../molecules";

export const HomeTask = () => {
  return (
    <MaxWidthBox color={theme.colors.Background2}>
      <MaxWidthBox
        direction={"row"}
        mainAxis={"space-between"}
        crossAxis={"flex-start"}
        mB={24}
      >
        <HomeTaskTitleText>Task</HomeTaskTitleText>
        <Button>
          <MoreIcon />
        </Button>
      </MaxWidthBox>
      <CurrentTask time={"00:32:10"} name={"Rasion Project"} />
    </MaxWidthBox>
  );
};
