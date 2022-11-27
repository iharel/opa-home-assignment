import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../app/userSlice";
import userService from "../services/userService";
import { Text, View } from "../components/Themed.js";

export default function LoginScreen(props) {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const userData = await userService.authenticateUser(nameText, passText);
    // here we should check if auth succeeded, response.status = 200... in this assignment, the fetch is mocked.
    dispatch(setUser(userData));

    return () => {
      // unmount logic
      console.debug("unmount");
    };
  };

  const [passText, onChangePassText] = useState("");
  const [nameText, onChangeNameText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change The Way We Use</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNameText}
        value={nameText}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassText}
        value={passText}
        placeholder="Password"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        onPress={() => {
          fetchData();
        }}>
        <Text style={styles.btn}>Submit</Text>
      </TouchableOpacity>
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
    color: "#14c873",

    paddingHorizontal: 45,
    paddingVertical: 10,
  },
  btn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14c873",
    borderColor: "#14c873",
    borderWidth: 1,
    borderRadius: 50,
    // width: 150,
    paddingHorizontal: 45,
    paddingVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 4,
    width: 250,
    borderColor: "#14c873",
    borderWidth: 1,
    marginBottom: 10,
  },
});
