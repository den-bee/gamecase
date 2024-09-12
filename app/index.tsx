import {StatusBar} from "expo-status-bar";
import {Text, View, StyleSheet} from "react-native";
import React from "react";
import colors from "../theme/colors";

const Home = () => {
  return (
    <View style={styles.main}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.primaryBlack,
  },
});

export default Home;
