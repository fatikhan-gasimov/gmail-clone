import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBarContainer from "../src/components/inbox/SearchBarContainer";
import { emails } from "../assets/emails";
import ActionButton from "../src/components/inbox/ActionButton";
import { colors } from "../assets/colors";
import EmailItem from "../src/components/inbox/EmailItem";
import { SwipeListView } from "react-native-swipe-list-view";
import { ScrollView } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [offset, setOffset] = useState(0);
  const [actionTextVisible, setActionTextVisible] = useState(0);

  const actionButtonVisibilityHandler = (event) => {
    var currentOffset = event.nativeEvent.contentOffset.y;
    var direction = currentOffset > offset ? "down" : "up";
    setOffset(currentOffset);
    if (direction == "up") setActionTextVisible(false);
    else setActionTextVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarContainer navigation={navigation} />
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={emails}
        renderItem={({ item }) => <EmailItem item={item} />}
        keyExtractor={(item) => item.id}
        onScroll={(event) => actionButtonVisibilityHandler(event)}
        ListHeaderComponent={() => (
            <Text style={styles.headerTitle}>Primary</Text>
        )}
      /> */}
      <SwipeListView
        scrollEnabled={true}
        data={emails}
        renderItem={({ item }) => <EmailItem item={item} />}
        onScroll={(event) => actionButtonVisibilityHandler(event)}
        swipeToClosePercent={100}
        ListHeaderComponent={() => (
          <Text style={styles.headerTitle}>Primary</Text>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <Ionicons
              name="md-archive-outline"
              size={24}
              color={colors.black}
            />
            <Ionicons
              name="md-archive-outline"
              size={24}
              color={colors.black}
            />
          </View>
        )}
      />
      <ActionButton isVisible={actionTextVisible} navigation={navigation} />
      <StatusBar style="dark" backgroundColor={colors.white} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: colors.white,
  },
  headerTitle: { marginTop: 10, marginLeft: 10 },
  rowBack: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.green,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
