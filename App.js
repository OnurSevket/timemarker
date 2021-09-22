import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { TimerScreen } from "./src/components/pages";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigation } from "./src/navigations/TabNavigation";
import { TimerHeader } from "./src/components/molecules";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Rubik-Regular": require("./src/assests/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./src/assests/fonts/Rubik-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Timer"
            component={TimerScreen}
            options={{
              header: ({ navigation }) => (
                <TimerHeader navigation={navigation} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
