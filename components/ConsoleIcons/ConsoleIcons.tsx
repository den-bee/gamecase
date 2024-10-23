import {View, Image, ImageSourcePropType, StyleSheet} from "react-native";
import React from "react";
import consoleIcons from "../../assets/icons/consoleIcons";

const ConsoleIcons = () => {
  return (
    <View style={styles.iconContainer}>
      {Object.entries(consoleIcons).map(([key, icon]) => (
        <Image
          style={{width: 60, height: 18, margin: 1}}
          key={key}
          source={icon as ImageSourcePropType}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ConsoleIcons;
