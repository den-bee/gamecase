import {View, TextInput, StyleSheet} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import colors from "../../theme/colors";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather
        style={styles.searchIcon}
        name="search"
        size={26}
        color={colors.primaryWhite}
      />
      <TextInput style={styles.textinput} placeholder="Search by name" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colors.primaryWhite,
    flexDirection: "row",
    padding: 6,
  },
  textinput: {
    color: colors.primaryWhite,
    width: 300,
  },
  searchIcon: {alignSelf: "center", paddingRight: 6},
});

export default SearchBar;
