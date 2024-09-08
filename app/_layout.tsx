import {Tabs} from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Header from "../components/header/header";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Feather name="home" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="screens/search/search"
        options={{
          title: "Search",
          tabBarIcon: () => (
            <Feather name="search" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="screens/wishlist/wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: () => (
            <Feather name="heart" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="screens/collection/collection"
        options={{
          title: "Collection",
          tabBarIcon: () => (
            <Feather name="book-open" size={28} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
