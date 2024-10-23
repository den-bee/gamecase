import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, FlatList} from "react-native";
import React from "react";
import colors from "../theme/colors";
import {useGetAllGamesQuery} from "./slices/apiSlice/apiSlice";
import SearchCard from "../components/Cards/SearchCard/SearchCard";
import TGame from "../types/TGame";
import TextComponent from "../components/TextComponent/TextComponents";

const Home = () => {
  const {data: games, isLoading} = useGetAllGamesQuery();

  const renderItem = ({item}: {item: TGame}) => (
    <SearchCard image={item.short_screenshots[0].image} title={item.name} />
  );

  return (
    <View style={styles.main}>
      {isLoading ? (
        <TextComponent text="Loading" />
      ) : (
        <FlatList
          data={games}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

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
