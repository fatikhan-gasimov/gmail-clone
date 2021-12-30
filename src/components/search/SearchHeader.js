import React, { useState } from "react";
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
import { TouchableHighlight } from "react-native-gesture-handler";
import { commonStyles } from "../common/style";

const SearchHeader = (props) => {
  return (
    <View style={styles.searchBarContainer}>
      <TouchableHighlight
        underlayColor={colors.touch}
        style={commonStyles.btn}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Feather name="arrow-left" size={24} color={colors.gray} />
      </TouchableHighlight>
      <TextInput
        style={styles.searchBar}
        placeholder="Search in mail"
        autoFocus
        onChangeText={(text) => props.onChange(text)}
      />
      <TouchableHighlight
        underlayColor={colors.touch}
        style={commonStyles.btn}
        onPress={() => {}}
      >
        <MaterialIcons name="keyboard-voice" size={24} color={colors.gray} />
      </TouchableHighlight>
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
    paddingHorizontal: 12,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray,
  },
});
