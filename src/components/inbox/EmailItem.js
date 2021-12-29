import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../../assets/colors";

const EmailItem = ({ item }) => {
  return (
    <View style={styles.emailContainer}>
      <Image source={{ uri: item.senderImageUrl }} style={styles.avatar} />
      <View style={styles.emailContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text} numberOfLines={2}>
          {item.description + "..."}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.sentDate}>{item.sentDate}</Text>
        <TouchableOpacity>
          {item.isSaved ? (
            <FontAwesome name="star" size={22} color={colors.orange} />
          ) : (
            <FontAwesome name="star-o" size={22} color={colors.gray} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailItem;

const styles = StyleSheet.create({
  emailContainer: {
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  avatar: { height: 44, width: 44 },
  emailContent: { flex: 1, marginHorizontal: 10, justifyContent: "center" },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray,
  },
  text: {
    fontWeight: "500",
    color: colors.gray,
    fontSize: 14,
  },
  actionContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "90%",
  },
  sentDate: { fontWeight: "500", fontSize: 14, color: colors.gray },
});
