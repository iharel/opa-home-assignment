import { ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import CarouselComponent from "../components/CarouselComponent";
import HeroComponent from "../components/HeroComponent";

import hsElementsArray from "../constants/data";
import { Text, View } from "../components/Themed.js";
import { React } from "react";
const HS_ELEMENT_TYPES = {
  CAROUSEL: "CAROUSEL",
  HERO: "HERO",
  DATA: "DATA",
};
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {hsElementsArray.map((hsElement, index) => {
        if (hsElement?.type === HS_ELEMENT_TYPES.CAROUSEL)
          return (
            <CarouselComponent key={index} carouselData={hsElement.data} />
          );
        else if (hsElement?.type === HS_ELEMENT_TYPES.HERO)
          return <HeroComponent data={hsElement.data} />;
        else if (hsElement?.type === HS_ELEMENT_TYPES.DATA) return <></>;
      })}

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
