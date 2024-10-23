import {View, Image, StyleSheet, Pressable} from "react-native";
import React, {FC} from "react";
import colors from "../../../theme/colors";
import ConsoleIcons from "../../ConsoleIcons/ConsoleIcons";
import TextComponent from "../../TextComponent/TextComponents";

type TCollectionCardProps = {
  image: string;
  title: string;
};

const CollectionCard: FC<TCollectionCardProps> = ({image, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image src={image} />
      </View>
      <View style={styles.content}>
        <ConsoleIcons />
        <View style={styles.bottomContent}>
          <TextComponent text={title} />
          <Pressable style={styles.removeButton}>
            <TextComponent text="remove" />
          </Pressable>
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
  imageContainer: {
    height: 180,
  },
  content: {
    padding: 4,
    borderTopWidth: 1,
    borderColor: colors.primaryWhite,
  },
  bottomContent: {
    padding: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeButton: {
    padding: 4,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.primaryPurple,
    borderRadius: 10,
  },
});

export default CollectionCard;
