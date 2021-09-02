import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
    AnalysisIcon
    , AnalyticsIcon
    , ArrowBackIcon
    , CalendarIcon
    , AddIcon
    , TimeIcon
    , MonitorIcon
    , MoreIcon
    , PieChartFilledIcon
    , PieChartIcon
    , PlusIcon
    , RightArrowIcon
    , StopWatchIcon
    , TimeOutlineIcon
    , UserIcon, PauseIcon, StopQuitIcon, CheckIcon, TimeFilledIcon
} from "./src/components/atoms/Icons";
import { ThemeProvider } from 'styled-components';
import {theme} from "./src/styles/theme";

import i18n from "./src/config/i18n";
import {ActivityItem, ReportItem} from "./src/components/molecules";
import {FlexBox} from "./src/components/atoms";

export default function App() {

    let [fontsLoaded] = useFonts({
        'Rubik-Regular' : require('./src/assests/fonts/Rubik-Regular.ttf'),
        'Rubik-Medium' : require('./src/assests/fonts/Rubik-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

  return (
      <ThemeProvider theme={theme}>
                <FlexBox flex={1} color={theme.colors.Background}>
                {/*<StyledBox flex={1} direction={'row'}>*/}

               {/*     <ReportItem
                        icon={<CheckIcon/>}
                        iconColor={theme.colors.Green}
                        title={i18n.t('HOME.TASK_COMPLETED')}
                        definition={'12'}/>
                    <ReportItem
                        icon={<TimeFilledIcon/>}
                        iconColor={theme.colors.Blue}
                        title={i18n.t('HOME.TIME_DURATION')}
                        definition={'1h 46m'}/>*/}
                    <ActivityItem
                        name={'UI Design'}
                        tag={['Work','Rasion Project']}
                        time={'00:42:21'}/>
                {/*</StyledBox>*/}
                 {/*  <ActivityItem />*/}
                    {/*
                         <AnalysisIcon/>
                         <AnalyticsIcon/>
                         <ArrowBackIcon/>
                         <CalendarIcon/>
                         <AddIcon/>
                         <TimeIcon/>
                         <MonitorIcon/>
                         <MoreIcon/>
                         <PieChartFilledIcon/>
                         <PieChartIcon/>
                         <PlusIcon/>
                         <RightArrowIcon/>
                         <StopWatchIcon/>
                         <TimeOutlineIcon/>
                         <UserIcon/>
                         <PauseIcon/>
                         <StopQuitIcon/>
                         <CheckIcon/>*/}
                </FlexBox>
        </ThemeProvider>
  );
}

