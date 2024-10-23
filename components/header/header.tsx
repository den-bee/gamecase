import {View, StyleSheet} from "react-native";
import SearchBar from "../SearchBar/SearchBar";
import Constants from "expo-constants";
import UserIcon from "../Icons/UserIcon/UserIcon";
import React from "react";
import colors from "../../theme/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <SearchBar />
      <UserIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.secondaryBlackLight,
    paddingTop: Constants.statusBarHeight + 10,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
