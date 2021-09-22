import React from "react";
import { MaxWidthBox, TodayTaskSeeAll, TodayTaskTitleText } from "../../atoms";
import { theme } from "../../../styles/theme";
import { ActivityItem } from "../../molecules";
import { Button } from "../../atoms/Button";

export const TodayTasks = ({ ...props }) => {
  return (
    <MaxWidthBox mT={32} color={theme.colors.Background2}>
      <MaxWidthBox
        direction={"row"}
        mainAxis={"space-between"}
        crossAxis={"flex-start"}
        mB={16}
      >
        <TodayTaskTitleText>Today</TodayTaskTitleText>
        <Button>
          <TodayTaskSeeAll>See All</TodayTaskSeeAll>
        </Button>
      </MaxWidthBox>

      <ActivityItem
        name={"UI Design"}
        tag={["Work", "Rasion Project"]}
        time={"00:42:21"}
      />
      <ActivityItem
        name={"UI Design"}
        tag={["Work", "Rasion Project"]}
        time={"00:42:21"}
      />
      <ActivityItem
        name={"UI Design"}
        tag={["Work", "Rasion Project"]}
        time={"00:42:21"}
      />
      <ActivityItem
        name={"UI Design"}
        tag={["Work", "Rasion Project"]}
        time={"00:42:21"}
      />
      <ActivityItem
        name={"UI Design"}
        tag={["Work", "Rasion Project"]}
        time={"00:42:21"}
      />
      <ActivityItem
        name={"UI Design"}
        tag={["Work", "Rasion Project"]}
        time={"00:42:21"}
      />
      <ActivityItem
        name={"UI Design"}
        tag={["Work", "Rasion Project"]}
        time={"00:42:21"}
      />
    </MaxWidthBox>
  );
};
