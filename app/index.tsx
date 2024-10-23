import {StatusBar} from "expo-status-bar";
import {View, StyleSheet} from "react-native";
import React from "react";
import colors from "../theme/colors";
import WishlistCard from "../components/Cards/WishlistCard/WishlistCard";
import SearchCard from "../components/Cards/SearchCard/SearchCard";
import CollectionCard from "../components/Cards/CollectionCard/CollectionCard";

const Home = () => {
  return (
    <View style={styles.main}>
      <CollectionCard />
      <SearchCard image="" title="Test" />
      <WishlistCard
        image=""
        title="Title"
        releaseDate="18-10-2024"
        genre="horror"
      />
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
