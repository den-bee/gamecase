import React, {FC} from "react";
import {View, StyleSheet, Image, Pressable} from "react-native";
import colors from "../../../theme/colors";
import TextComponent from "../../TextComponent/TextComponents";
import ConsoleIcons from "../../ConsoleIcons/ConsoleIcons";
import HearthIcon from "../../Icons/HearthIcon/HearthIcon";

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
          <ConsoleIcons />
          <TextComponent text={title} />
        </View>
        <View style={styles.midContent}>
          <TextComponent text={releaseDate} />
          <TextComponent text={genre} />
        </View>
        <View style={styles.bottomContent}>
          <HearthIcon />
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
