import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../assets/colors";
import { TouchableOpacity } from "react-native";

const ActionButton = ({ isVisible }) => {
  return (
    <TouchableOpacity style={[{ width: isVisible ? 120 : 60}, styles.actionButtonContainer]} activeOpacity={0.9}>
      <FontAwesome name="pencil" size={22} color="black" />
      {isVisible ? <Text style={styles.text}>Compose</Text> : null}
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  actionButtonContainer: {
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 20,
    backgroundColor: colors.blue,
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    marginHorizontal: 5,
  },
});
