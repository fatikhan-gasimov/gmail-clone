import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
import { colors } from "./assets/colors";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from "./screens/DrawerScreen";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen name="Feed" component={DrawerNavigator} /> */}
      <Stack.Group
        screenOptions={{ presentation: "card", headerShown: false }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

// const Drawerc = createDrawerNavigator();
// function DrawerNavigator() {
//   return (
//     <Drawerc.Navigator>
//       <Drawerc.Screen
//         name="Feed"
//         component={DrawerScreen}
//       />
//     </Drawerc.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      shifting={true}
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#5F6368",
        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 14,
          fontWeight: "800",
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "#C2D5A8",
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          backgroundColor: "#f0f5fb",
          borderTopWidth: 0,
          elevation: 0,
          height: 58,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Mail",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <View
                style={{
                  height: 32,
                  width: 74,
                  padding: 2,
                  backgroundColor: "#d5ecfc",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <Ionicons name="mail" size={size} color={color} />
              </View>
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
              <View
                style={{
                  height: 32,
                  width: 74,
                  padding: 2,
                  backgroundColor: "#d5ecfc",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <AntDesign name="videocamera" size={size} color={color} />
              </View>
            ) : (
              <AntDesign name="videocamera" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
