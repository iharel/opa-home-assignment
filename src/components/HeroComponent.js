import * as WebBrowser from "expo-web-browser";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function HeroComponent({ data }) {
  console.debug(data);
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          {data.title}
        </Text>

        <Image style={styles.tinyLogo} source={{ uri: data.imgUrl }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
