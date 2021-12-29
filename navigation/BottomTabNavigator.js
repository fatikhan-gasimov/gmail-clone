import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { colors } from "../assets/colors";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import BottomTabContainer from "./BottomTabContainer";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: colors.black,
  tabBarInactiveTintColor: colors.gray,
  tabBarLabelStyle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "800",
  },
  tabBarStyle: {
    backgroundColor: colors.lightBlue,
    borderTopWidth: 0,
    elevation: 0,
    height: 58,
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator shifting={true} screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Mail",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <BottomTabContainer>
                <Ionicons name="mail" size={size} color={color} />
              </BottomTabContainer>
            ) : (
              <Ionicons name="mail" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Meet"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Meet",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <BottomTabContainer>
                <AntDesign name="videocamera" size={size} color={color} />
              </BottomTabContainer>
            ) : (
              <AntDesign name="videocamera" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
