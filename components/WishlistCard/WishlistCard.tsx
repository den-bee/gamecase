/* eslint-disable @typescript-eslint/no-require-imports */
import React, {FC} from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import colors from "../../theme/colors";
import consoleIcons from "../../assets/icons/consoleIcons";
import TextComponent from "../TextComponent/TextComponents";

type TWishlistCardProps = {
  image: string;
  title: string;
  releaseDate: string;
  genre: string;
};

const WishlistCard: FC<TWishlistCardProps> = ({
  image,
  title,
  releaseDate,
  genre,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image src={image} />
      </View>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <View style={styles.iconContainer}>
            {Object.entries(consoleIcons).map(([key, icon]) => (
              <Image
                style={{width: 60, height: 18, margin: 1}}
                key={key}
                source={icon as ImageSourcePropType}
              />
            ))}
          </View>
          <TextComponent text={title} />
        </View>
        <View style={styles.midContent}>
          <TextComponent text={releaseDate} />
          <TextComponent text={genre} />
        </View>
        <View style={styles.bottomContent}>
          <Image source={require("../../assets/icons/hearth.png")} />
          <Pressable style={styles.collectionButton}>
            <TextComponent text="add to collection" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primaryWhite,
    borderRadius: 10,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: colors.primaryWhite,
    width: 160,
  },
  content: {
    width: 180,
    padding: 10,
    justifyContent: "space-around",
    gap: 30,
  },
  topContent: {
    gap: 10,
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  midContent: {
    gap: 10,
  },
  bottomContent: {
    gap: 10,
  },
  collectionButton: {
    padding: 4,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.primaryPurple,
    borderRadius: 10,
  },
});

export default WishlistCard;
