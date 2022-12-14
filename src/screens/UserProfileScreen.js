import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import { Text, View } from "../components/Themed.js";
import { useIsFocused } from "@react-navigation/native";

export default function UserProfileScreen() {
  const [userData, setUserData] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await userService.getUserDetails();

      setUserData(userData);
      console.debug(userData);

      return () => {
        // unmount logic
        console.debug("unmount");
      };
    };
    isFocused && fetchData();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> First Name: {userData.firstName}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}> Last Name: {userData.lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
