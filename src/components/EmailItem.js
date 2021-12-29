import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const EmailItem = ({item}) => {
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
        <FontAwesome name="star-o" size={22} color="gray" />
      </View>
    </View>
  );
};

export default EmailItem;

const styles = StyleSheet.create({
  emailContainer: {
    height: 90,
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
    color: "#5d5d5d",
  },
  text: {
    fontWeight: "500",
    color: "#5d5d5d",
    fontSize: 14,
  },
  actionContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "90%",
  },
  sentDate: { fontWeight: "500", fontSize: 14, color: "#5d5d5d" },
});
