import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { colors } from "../../../assets/colors";
import { fontFamily } from "../../../assets/font";
import { commonStyles } from "../common/style";
import { TouchableHighlight } from "react-native-gesture-handler";
const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={colors.touch}
        style={styles.iconContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Feather name="arrow-left" size={26} color={colors.darkGray} />
      </TouchableHighlight>

      <Text style={styles.headerTitle}>Compose</Text>

      <TouchableHighlight
        underlayColor={colors.touch}
        style={styles.iconContainer}
        onPress={() => {}}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name="attachment"
          size={26}
          color={colors.darkGray}
        />
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor={colors.touch}
        style={styles.iconContainer}
        onPress={() => {}}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name="send-outline"
          size={26}
          color={colors.darkGray}
        />
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor={colors.touch}
        style={styles.iconContainer}
        onPress={() => {}}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name="dots-vertical"
          size={26}
          color={colors.darkGray}
        />
      </TouchableHighlight>
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
    fontFamily: fontFamily.medium,
  },
  icon: {},
  iconContainer: {
    borderRadius: 20,
    padding: 6,
  },
});
