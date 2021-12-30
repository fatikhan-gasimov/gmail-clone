import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../../assets/colors";
import { fontFamily } from "../../../assets/font";

const EmailItem = ({ item }) => {
  const [isSaved, setIsSaved] = useState(item.isSaved);
  const onPressIsSaved = (isSaved) => {
    setIsSaved(!isSaved);
  };
  return (
    <View style={styles.emailContainer}>
      <Image source={{ uri: item.senderImageUrl }} style={styles.avatar} />
      <View style={styles.emailContent}>
        <Text
          style={[
            styles.title,
            item.isRead ? { color: colors.gray } : styles.read,
          ]}
        >
          {item.sender}
        </Text>

        <Text
          style={[
            styles.text,
            item.isRead ? { color: colors.gray } : styles.read,
          ]}
          numberOfLines={1}
        >
          {item.subject}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Text
          style={[
            styles.sentDate,
            item.isRead ? { color: colors.gray } : styles.read,
          ]}
        >
          {item.sentDate}
        </Text>
        <TouchableOpacity onPress={() => onPressIsSaved(isSaved)}>
          {isSaved ? (
            <FontAwesome name="star" size={22} color={colors.orange} />
          ) : (
            <FontAwesome
              name="star-o"
              size={22}
              color={item.isRead ? colors.gray : colors.black}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailItem;

const styles = StyleSheet.create({
  emailContainer: {
    height: 88,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 6,
  },
  avatar: { height: 44, width: 44 },
  emailContent: { flex: 1, marginHorizontal: 10, justifyContent: "center" },
  title: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: fontFamily.regular,
    color: colors.gray,
  },
  read: {
    fontFamily: fontFamily.bold,
    color: colors.black,
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
