import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed.js";

export default function LoginScreen(props) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const setAuthorized = (isAuthorized) => {
    setIsAuthorized(isAuthorized);
    props.setAuthorized(true);
  };

  return (
    <View style={styles.container}>
      <Text>{isAuthorized ? "AUTHORISED" : "NOT"}</Text>

      <Text style={styles.title}>User Name</Text>
      <Text style={styles.title}>Password</Text>
      <TouchableOpacity
        onPress={() => {
          setAuthorized(true);
        }}>
        <Text style={styles.title}>Submit</Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
