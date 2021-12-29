import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { colors } from "../../../assets/colors";
const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Feather name="arrow-left" size={26} color={colors.darkGray} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Compose</Text>
      <MaterialCommunityIcons
        style={styles.icon}
        name="attachment"
        size={26}
        color={colors.darkGray}
      />
      <MaterialCommunityIcons
        style={styles.icon}
        name="send-outline"
        size={26}
        color={colors.darkGray}
      />
      <MaterialCommunityIcons
        style={styles.icon}
        name="dots-vertical"
        size={26}
        color={colors.darkGray}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
    marginHorizontal: 15,
    flex: 1,
    color: colors.darkGray,
  },
  icon: {
    marginLeft: 15,
  },
});
