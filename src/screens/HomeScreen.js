import { ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import homeService from "../services/homeService";
import CarouselComponent from "../components/CarouselComponent";
import HeroComponent from "../components/HeroComponent";

import { Text, View } from "../components/Themed.js";
import CONSTS from "../constants/constants";
import { React } from "react";
import DataComponent from "../components/DataComponent";

export default function HomeScreen() {
  const [hsElementsArray, setHsElementsArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const hsElementsArray = await homeService.getHomeElementsData();
      setHsElementsArray(hsElementsArray);

      return () => {
        // unmount logic
        console.debug("unmount");
      };
    };
    fetchData();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {hsElementsArray.map((hsElement, index) => {
        if (hsElement?.type === CONSTS.HS_ELEMENT_TYPES.CAROUSEL)
          return (
            <CarouselComponent key={index} carouselData={hsElement.data} />
          );
        else if (hsElement?.type === CONSTS.HS_ELEMENT_TYPES.HERO)
          return <HeroComponent key={index} data={hsElement.data} />;
        else if (hsElement?.type === CONSTS.HS_ELEMENT_TYPES.DATA)
          return <DataComponent key={index} dataList={hsElement.data} />;
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
    backgroundColor: "black",
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
