import {Tabs} from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Header from "../components/header/header";
import colors from "../theme/colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
        tabBarStyle: {
          backgroundColor: colors.secondaryBlack,
          borderWidth: 0,
        },
        tabBarLabelStyle: {
          color: colors.primaryWhite,
        },
        tabBarActiveTintColor: colors.primaryWhite,
        tabBarInactiveTintColor: colors.secondaryBlackLight,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => (
            <Feather name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)/(search)/search"
        options={{
          title: "Search",
          tabBarIcon: ({color}) => (
            <Feather name="search" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)/(wishlist)/wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({color}) => (
            <Feather name="heart" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)/(collection)/collection"
        options={{
          title: "Collection",
          tabBarIcon: ({color}) => (
            <Feather name="book-open" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;