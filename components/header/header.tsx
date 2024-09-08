import {View, StyleSheet} from "react-native";
import SearchBar from "../searchbar/searchbar";
import Constants from "expo-constants";
import UserIcon from "../usericon/usericon";

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
    paddingTop: Constants.statusBarHeight + 10,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
