import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../assets/colors";
const SearchHeader = ({ navigation }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Feather name="arrow-left" size={24} color={colors.gray} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Search in mail"
        autoFocus
      />
      <MaterialIcons name="keyboard-voice" size={24} color={colors.gray} />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 15,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray,
  },
});
