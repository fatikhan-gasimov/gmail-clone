import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";

const SearchBarContainer = ({ navigation }) => {
  return (
    <View style={styles.searchContainer}>
      <Pressable
        onPress={() => {
            navigation.openDrawer();
        }}
      >
        <Feather name="menu" size={22} color="black" />
      </Pressable>

      <Text
        style={styles.searchBar}
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        Search in mail
      </Text>
      <Image
        source={{
          uri: "https://camo.githubusercontent.com/06b39fc6b7e1ab60119bb11626220535f002634fe5e4bada9362ac26978ab6e1/68747470733a2f2f7261772e6769746875622e636f6d2f656c61646e6176612f6d6174657269616c2d6c65747465722d69636f6e732f6d61737465722f646973742f706e672f522e706e67",
        }}
        style={styles.avatar}
      />
    </View>
  );
};

export default SearchBarContainer;

const styles = StyleSheet.create({
  searchContainer: {
    height: 48,
    width: "96%",
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#eef2fb",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    justifyContent: "space-between",
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
  },
  avatar: { height: 32, width: 32 },
});
