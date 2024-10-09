/* eslint-disable @typescript-eslint/no-require-imports */
import {View, StyleSheet, Image} from "react-native";
import React, {FC} from "react";
import colors from "../../theme/colors";
import TextComponent from "../TextComponent/TextComponents";

type TSearchCardProps = {
  image: string;
  consoleIcons: string[];
  title: string;
};

const SearchCard: FC<TSearchCardProps> = ({image, consoleIcons, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image src={image} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/switch.png")}
          />
        </View>
        <View style={styles.contentBottom}>
          <TextComponent text={title} />
          <View style={styles.iconContainer}>
            <Image source={require("../../assets/icons/book.png")} />
            <Image source={require("../../assets/icons/hearth.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primaryWhite,
  },
  image: {
    height: 180,
  },
  content: {
    borderTopWidth: 1,
    borderColor: colors.primaryWhite,
  },
  contentTop: {
    height: 30,
    padding: 4,
  },
  contentBottom: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconContainer: {
    flexDirection: "row",
    gap: 8,
  },
  icon: {},
});

export default SearchCard;
