import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import {View, StyleSheet} from "react-native";
import colors from "../../theme/colors";

const UserIcon = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={38} color={colors.primaryWhite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default UserIcon;
