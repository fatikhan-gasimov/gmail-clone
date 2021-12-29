import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FilterItem from "./FilterItem";

const Filter = () => {
  return (
    <ScrollView horizontal   showsHorizontalScrollIndicator={false}  style={styles.container}>
      <FilterItem text="From" iconVisible={true} />
      <FilterItem text="To" iconVisible={true} />
      <FilterItem text="Attachment" iconVisible={true} />
      <FilterItem text="Date" iconVisible={true} />
      <FilterItem text="Is unread"  />
      <FilterItem text="Eclude calendar updates"  />
    </ScrollView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    maxHeight: 50,
  },
});
