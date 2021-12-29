import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ComposeScreen from "../screens/ComposeScreen";
import SearchScreen from "../screens/SearchScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Group screenOptions={{ presentation: "modal", headerShown: false }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Compose" component={ComposeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
