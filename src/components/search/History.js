import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { search_history } from "../../../assets/search_history";
import HistoryItem from "./HistoryItem";
import { colors } from "../../../assets/colors";

const History = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={search_history}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <HistoryItem item={item} />}
      ListHeaderComponent={() => (
        <Text style={styles.headerTitle}>Recent Mail Searches</Text>
      )}
    />
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 600,
  },
  headerTitle: {
    margin: 10,
    color: colors.gray,
    fontSize: 16,
  },
});