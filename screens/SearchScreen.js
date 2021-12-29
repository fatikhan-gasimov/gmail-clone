import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/colors";
import Filter from "../src/components/search/Filter";
import SearchHeader from "../src/components/search/SearchHeader";
const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader navigation={navigation} />
      <Filter />
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
