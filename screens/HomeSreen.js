import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//component
import Button from "../components/Button";

//styles
import styles from '../constants/style'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={image.logo} source={require("../assets/logo.png")} />
      <Button text="Login" />
      <Button text="Register" style={{ backgroundColor: "#263238" }} />
    </View>
  );
}

const image = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50
  }
});
