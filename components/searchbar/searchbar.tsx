import {View, TextInput, StyleSheet} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather
        style={styles.searchIcon}
        name="search"
        size={26}
        color="black"
      />
      <TextInput style={styles.input} placeholder="Search by name" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderWidth: 2,
    borderRadius: 50,
    flexDirection: "row",
    padding: 6,
  },
  input: {
    width: 300,
  },
  searchIcon: {alignSelf: "center", paddingRight: 6},
});

export default SearchBar;
