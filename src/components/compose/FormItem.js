import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TextInput } from "react-native";
import { colors } from "../../../assets/colors";

const FormItem = ({ title, iconVisible }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} />
      {iconVisible ? (
        <MaterialCommunityIcons
          name="chevron-down"
          size={24}
          color={colors.darkGray}
        />
      ) : null}
    </View>
  );
};

export default FormItem;

const styles = StyleSheet.create({
  formContainer: {
    borderColor: colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: colors.darkGray,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 18,
    color: colors.darkGray,

  },
});
