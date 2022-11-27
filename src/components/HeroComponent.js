import * as WebBrowser from "expo-web-browser";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function HeroComponent({ data }) {
  console.debug(data);
  return (
    <View>
      <View style={styles.heroContainer}>
        <Text style={styles.getStartedText}>Hero element</Text>
        <Text style={styles.getStartedText}>{data.title}</Text>
        <Image style={styles.tinyLogo} source={{ uri: data.imgUrl }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    // marginTop: 15,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    color: Colors.primary.color,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
