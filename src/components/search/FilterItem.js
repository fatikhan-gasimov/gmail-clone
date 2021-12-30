import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../assets/colors";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
const FilterItem = (props) => {
  const { text, iconVisible } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.filterText}>{text}</Text>
      {iconVisible ? (
        <AntDesign name="caretdown" size={10} color={colors.gray} />
      ) : null}
    </TouchableOpacity>
  );
};

export default FilterItem;

const styles = StyleSheet.create({
  container: {
    height: 34,
    borderWidth: 1.1,
    borderRadius: 8,
    borderColor: colors.gray,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  filterText: {
    fontSize: 14,
    color: colors.gray,
    marginHorizontal: 5,
    fontWeight: "500",
  },
});
