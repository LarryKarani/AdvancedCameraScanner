import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputBox = props => {
  return (
    <TextInput
      style={styles.InputBox}
      placeholder={props.placeholder}
      placeholderTextColor={"#fff"}
      selectionColor={"#fff"}
      secureTextEntry={props.placeholder === "Password" ? true : false}
    />
  );
};

const styles = StyleSheet.create({
  InputBox: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1
  }
});

export default InputBox;
