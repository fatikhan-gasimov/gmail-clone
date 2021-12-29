import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../assets/colors";
import { AntDesign } from "@expo/vector-icons";
const FilterItem = (props) => {
  const { text, iconVisible } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.filterText}>{text}</Text>
      {iconVisible ? (
        <AntDesign name="caretdown" size={10} color={colors.gray} />
      ) : null}
    </View>
  );
};

export default FilterItem;

const styles = StyleSheet.create({
  container: {
    height: 34,
    borderWidth: 1.3,
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
  },
});
