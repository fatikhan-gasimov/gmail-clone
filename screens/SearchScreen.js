import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../assets/colors";
import Filter from "../src/components/search/Filter";
import History from "../src/components/search/History";
import SearchHeader from "../src/components/search/SearchHeader";
import { search_history } from "../assets/search_history";

const SearchScreen = ({ navigation }) => {
  let [historyItems, setHistoryItems] = useState(search_history);

  textChangeHandler = (text ="") => {
    if (text == "") setHistoryItems(search_history);
    else {
      const filteredItems = historyItems.filter((item) => {
        return item.text.includes(text.toLowerCase());
      });
      setHistoryItems(filteredItems);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader navigation={navigation} onChange={textChangeHandler} />
      <Filter />
      <History search_history={historyItems} />
      <StatusBar style="dark" backgroundColor={colors.lightBlue} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
});
