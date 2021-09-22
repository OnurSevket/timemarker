import React from "react";
import { theme } from "../styles/theme";
import {
  CreateTimerScreen,
  HomeScreen,
  ReportScreen,
} from "../components/pages";
import {
  AddIcon,
  CircleItem,
  PieChartFilledIcon,
  PieChartIcon,
  PlusIcon,
  TimeFilledIcon,
  TimeIcon,
} from "../components/atoms";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReportHeader } from "../components/molecules";

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          height: theme.metrics.px(90),
          borderTopLeftRadius: theme.metrics.px(30),
          borderTopRightRadius: theme.metrics.px(30),
          backgroundColor: theme.colors.White,
          paddingBottom: theme.metrics.px(10),
        },
      }}
    >
      <Tab.Screen
        name="Stack"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? <TimeFilledIcon /> : <TimeIcon />,
          tabBarItemStyle: {},
        }}
      />
      <Tab.Screen
        name="CreateTimer"
        component={CreateTimerScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <CircleItem height={44} width={44} color={theme.colors.Black}>
                <AddIcon />
              </CircleItem>
            ) : (
              <PlusIcon />
            ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          // tabBarBadge: 15466,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? <PieChartFilledIcon /> : <PieChartIcon />,
          headerShown: true,
          header: ({ navigation }) => <ReportHeader navigation={navigation} />,
        }}
      />
    </Tab.Navigator>
  );
};
