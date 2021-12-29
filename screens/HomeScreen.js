import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBarContainer from "../src/components/SearchBarContainer";
import EmailItem from "../src/components/EmailItem";
import { emails } from "../assets/emails";
import ActionButton from "../src/components/ActionButton";

const HomeScreen = ({navigation}) => {
  const [offset, setOffset] = useState(0);
  const [actionTextVisible, setActionTextVisible] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
    <SearchBarContainer  navigation={navigation}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={emails}
        renderItem={({ item }) => <EmailItem item={item} />}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          var currentOffset = event.nativeEvent.contentOffset.y;
          var direction =
            currentOffset > offset
              ? "down"
              : "up";
          setOffset(currentOffset);
          if (direction == "up") setActionTextVisible(false);
          else setActionTextVisible(true);
        }}
        ListHeaderComponent={() => (
          <View style={{ marginTop: 10 }}>
            <Text>Primary</Text>
          </View>
        )}
      />
      <ActionButton isVisible={actionTextVisible} />
      <StatusBar style="dark" backgroundColor="white" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
