import {Tabs} from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({size, color}) => (
            <Feather name="home" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="screens/search/search"
        options={{
          title: "Search",
          tabBarIcon: ({color, size}) => (
            <Feather name="search" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="screens/wishlist/wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({color, size}) => (
            <Feather name="heart" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="screens/collection/collection"
        options={{
          title: "Collection",
          tabBarIcon: ({color, size}) => (
            <Feather name="book-open" size={28} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
