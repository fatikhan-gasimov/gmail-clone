import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBarContainer from "../src/components/inbox/SearchBarContainer";
import { emails } from "../assets/emails";
import ActionButton from "../src/components/ActionButton";
import { colors } from "../assets/colors";

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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={emails}
        renderItem={({ item }) => <EmailItem item={item} />}
        keyExtractor={(item) => item.id}
        onScroll={(event) => actionButtonVisibilityHandler(event)}
        ListHeaderComponent={() => (
            <Text style={styles.headerTitle}>Primary</Text>
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
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: colors.white,
  },
  headerTitle: { marginTop: 10, marginLeft: 5 },
});
