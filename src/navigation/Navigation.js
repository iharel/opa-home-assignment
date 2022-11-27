// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";

import { Text } from "../components/Themed";
import LoginScreen from "../screens/LoginScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";

export default function Navigation({ colorScheme }) {
  const user = useSelector((state) => {
    console.debug(state);
    return state.user.user;
  });
  let isAuthorized = false;
  if (user) isAuthorized = true;
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {isAuthorized ? (
        <RootNavigator isAuthorized={isAuthorized} />
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      {/* <Stack.Screen name="PreLogin" component={HomeScreen} /> */}
      {/*  <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="Home" component={UserProfileScreen} /> */}
    </Stack.Navigator>
  );
}
