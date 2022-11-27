import { StyleSheet, Image } from "react-native";
import CONSTS from "../constants/constants";
import CarouselComponent from "../components/CarouselComponent";
import HeroComponent from "../components/HeroComponent";
import Color from "../constants/Colors";
import { Text, View } from "./Themed";

export default function DataComponent({ dataList }) {
  return (
    <View style={styles.container}>
      <Text>DATA OBJECT</Text>
      {dataList.map((dataObj, index) => {
        if (dataObj?.type === CONSTS.HS_ELEMENT_TYPES.CAROUSEL)
          return <CarouselComponent key={index} carouselData={dataObj.data} />;
        else if (dataObj?.type === CONSTS.HS_ELEMENT_TYPES.HERO)
          return <HeroComponent key={index} data={dataObj.data} />;
        else if (dataObj?.type === CONSTS.HS_ELEMENT_TYPES.TEXT)
          return (
            <Text key={index} style={styles.text}>
              {dataObj.data}{" "}
            </Text>
          );
        else if (dataObj?.type === CONSTS.HS_ELEMENT_TYPES.IMAGE) {
          console.debug(dataObj);
          return (
            <Image
              key={index}
              style={styles.image}
              source={{ uri: dataObj.data }}
            />
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  text: {
    color: Color.primary.color,
  },
  container: {
    // flex: 1,
    // alignItems: "center",
    backgroundColor: "black",
    // padding: 8,
  },
});
