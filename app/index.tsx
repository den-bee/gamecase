import {StatusBar} from "expo-status-bar";
import {View, StyleSheet} from "react-native";
import React from "react";
import colors from "../theme/colors";
import SearchCard from "../components/SearchCard/SearchCard";

const Home = () => {
  return (
    <View style={styles.main}>
      <SearchCard title="title example" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    color: colors.primaryWhite,
    backgroundColor: colors.primaryBlack,
  },
});

export default Home;
