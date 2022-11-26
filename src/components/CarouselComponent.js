// import * as WebBrowser from "expo-web-browser";
import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "./CarouselCardItem.js";
// import data from "../constants/data.js";

const CarouselCards = (props) => {
  const isCarousel = React.useRef(null);
  console.debug(props.carouselData);
  return (
    <View>
      <Carousel
        // layout="tinder"
        layoutCardOffset={0}
        ref={isCarousel}
        data={props.carouselData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
