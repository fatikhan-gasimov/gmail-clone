import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../src/components/compose/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../assets/colors";
import FormItem from "../src/components/compose/FormItem";
const ComposeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.innerContainer}>
        <FormItem title="From" iconVisible={true} />
        <FormItem title="To" iconVisible={true} />
        <FormItem title="Subject" />
        <TextInput placeholderTextColor={colors.darkGray} style={styles.emailBody} multiline placeholder="Compose Email"></TextInput>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ComposeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  innerContainer: {},
  emailBody: {
    padding: 15,
    fontSize: 18,
    color: colors.darkGray,
  }
});
