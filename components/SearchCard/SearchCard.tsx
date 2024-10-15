/* eslint-disable @typescript-eslint/no-require-imports */
import {View, StyleSheet, Image, ImageSourcePropType} from "react-native";
import React, {FC} from "react";
import colors from "../../theme/colors";
import TextComponent from "../TextComponent/TextComponents";
import consoleIcons from "../../assets/icons/consoleIcons";

type TSearchCardProps = {
  image: string;
  title: string;
};

const SearchCard: FC<TSearchCardProps> = ({image, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image src={image} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          {Object.entries(consoleIcons).map(([key, icon]) => (
            <Image
              style={{width: 60, height: 18, margin: 1}}
              key={key}
              source={icon as ImageSourcePropType}
            />
          ))}
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
    width: 200,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primaryWhite,
  },
  image: {
    height: 180,
  },
  content: {
    padding: 4,
    borderTopWidth: 1,
    borderColor: colors.primaryWhite,
  },
  contentTop: {
    height: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    gap: 1,
  },
  contentBottom: {
    padding: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default SearchCard;
