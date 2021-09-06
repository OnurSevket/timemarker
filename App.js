import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import { ThemeProvider } from 'styled-components';
import {theme} from "./src/styles/theme";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, ReportScreen, TimerScreen,} from "./src/components/pages";
import {
    AddIcon,
    PieChartFilledIcon,
    PieChartIcon,
    PlusIcon,
    TimeFilledIcon,
    TimeIcon,
    TimeOutlineIcon
} from "./src/components/atoms";
import {CircleItem} from "./src/components/atoms/CircleItem";


const Tab = createBottomTabNavigator();

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
          <StatusBar backgroundColor={'transparent'} translucent/>
          <NavigationContainer>
              <Tab.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                      tabBarShowLabel: false,
                      headerShown: false,
                      tabBarStyle: {
                          // display:'flex',
                          position:'absolute',
                          height: theme.metrics.px( 90),
                          borderTopLeftRadius:theme.metrics.px( 30),
                          borderTopRightRadius:theme.metrics.px( 30),
                          backgroundColor:theme.colors.White,
                          paddingBottom:theme.metrics.px(10)
                          // shadowColor: 'transparent',//https://github.com/react-navigation/react-navigation/issues/3052#issuecomment-352812792
                          // shadowOpacity: 0,
                          // shadowRadius: 0,
                          // shadowOffset: {
                          //     height: 0,
                          //     width: 0,
                          // },
                          // elevation: 0,
                          // justifyContent:'flex-start',
                          // alignItems:'flex-start',
                      },
                  }}>
                  <Tab.Screen name="Home" component={HomeScreen} options={{
                      tabBarIcon:({focused,color,size}) =>
                          (
                              focused ? <TimeFilledIcon/> : <TimeIcon/>
                      ),
                      tabBarItemStyle:{

                          // paddingLeft:20,
                          // backgroundColor:theme.colors.Purple,
                      }
                  }} />
                  <Tab.Screen name="Timer" component={TimerScreen} options={{
                      tabBarIcon:({focused,color,size})=>( focused ?  <CircleItem height={44} width={44} color={theme.colors.Black}><AddIcon/></CircleItem> :<PlusIcon/>  )
                  }}/>
                  <Tab.Screen name="Report" component={ReportScreen} options={{
                      tabBarIcon:({focused,color,size})=>( focused ? <PieChartFilledIcon/> : <PieChartIcon/> )
                  }}/>
              </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
  );
}

//`${({ theme  }) => theme.metrics.px( 76)}`
