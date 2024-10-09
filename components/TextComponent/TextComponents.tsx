import {Text, StyleSheet} from "react-native";
import React, {FC} from "react";
import colors from "../../theme/colors";

type TTextComponentProps = {
  text: string;
};

const TextComponent: FC<TTextComponentProps> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.primaryWhite,
  },
});

export default TextComponent;
