import { ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import homeService from "../services/homeService";
import CarouselComponent from "../components/CarouselComponent";
import HeroComponent from "../components/HeroComponent";

import { Text, View } from "../components/Themed.js";
import CONSTS from "../constants/constants";
import { React } from "react";
import DataComponent from "../components/DataComponent";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function HomeScreen({}) {
  const [hsElementsArray, setHsElementsArray] = useState([]);
  const isFocused = useIsFocused(); // When back to focus, we want to refetch data.

  // checking if user conditions are met for the data object:
  const user = useSelector((state) => {
    return state.user.user;
  });
  userConditionsMet = user.firstName = "David";

  useEffect(() => {
    const fetchData = async () => {
      const hsElementsArray = await homeService.getHomeElementsData();
      setHsElementsArray(hsElementsArray);
      return () => {
        // unmount logic
        console.debug("unmount");
      };
    };
    isFocused && fetchData();
  }, [isFocused]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {hsElementsArray.map((hsElement, index) => {
        if (hsElement?.type === CONSTS.HS_ELEMENT_TYPES.CAROUSEL)
          return (
            <CarouselComponent key={index} carouselData={hsElement.data} />
          );
        else if (hsElement?.type === CONSTS.HS_ELEMENT_TYPES.HERO)
          return <HeroComponent key={index} data={hsElement.data} />;
        else if (hsElement?.type === CONSTS.HS_ELEMENT_TYPES.DATA) {
          if (userConditionsMet)
            return <DataComponent key={index} dataList={hsElement.data} />;
        }
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
