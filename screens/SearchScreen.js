import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/colors";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search</Text>
      <StatusBar style="dark" backgroundColor={colors.blue} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
});
