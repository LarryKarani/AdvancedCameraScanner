import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = (props)  => {
  return <TouchableOpacity style={styles.button} onPress={props.onpress}>
    <Text style={styles.btntext}>{props.text}</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
    borderRadius: 14,
    
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default Button;