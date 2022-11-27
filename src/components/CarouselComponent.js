// import * as WebBrowser from "expo-web-browser";
import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import Colors from "../constants/Colors.js";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "./CarouselCardItem.js";
// import data from "../constants/data.js";

const CarouselCards = (props) => {
  const isCarousel = React.useRef(null);
  console.debug(props.carouselData);
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        // layout="tinder"
        layoutCardOffset={1}
        ref={isCarousel}
        data={props.carouselData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={1}
        useScrollView={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: "black",
  },
});
export default CarouselCards;
