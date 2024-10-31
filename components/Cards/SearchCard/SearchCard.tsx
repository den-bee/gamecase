import {View, StyleSheet, Image} from "react-native";
import React, {FC} from "react";
import colors from "../../../theme/colors";
import TextComponent from "../../TextComponent/TextComponents";
import ConsoleIcons from "../../ConsoleIcons/ConsoleIcons";
import BookIcon from "../../Icons/BookIcon/BookIcon";
import HearthIcon from "../../Icons/HearthIcon/HearthIcon";

type TSearchCardProps = {
  image: string;
  title: string;
};

const SearchCard: FC<TSearchCardProps> = ({image, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.content}>
        <ConsoleIcons />
        <View style={styles.bottomContent}>
          <TextComponent text={title} />
          <View style={styles.iconContainer}>
            <BookIcon />
            <HearthIcon />
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
  imageContainer: {
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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

  iconContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default SearchCard;
