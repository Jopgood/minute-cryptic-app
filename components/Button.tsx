import { StyleProp, Pressable, Text, TextStyle, ViewStyle } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  buttonStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
};

export default function Button({
  title,
  onPress,
  buttonStyle,
  textStyle,
}: Readonly<Props>) {
  return (
    <Pressable onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
