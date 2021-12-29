import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../../assets/colors";
const HistoryItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <FontAwesome5 name="history" size={20} color={colors.gray} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  text: {
      color: colors.gray,
      fontWeight: '600',
      fontSize: 16,
      marginHorizontal: 20
  }
});
