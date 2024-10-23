import {StatusBar} from "expo-status-bar";
import {View, StyleSheet} from "react-native";
import React from "react";
import colors from "../theme/colors";
import {Provider} from "react-redux";
import store from "./store/store";

const Home = () => {
  return (
    <Provider store={store}>
      <View style={styles.main}>
        <StatusBar style="auto" />
      </View>
    </Provider>
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
