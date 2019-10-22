import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputBox = props => {
  return (
    <TextInput
      style={styles.InputBox}
      placeholder={props.placeholder}
      placeholderTextColor={"black"}
      selectionColor={"black"}
      secureTextEntry={props.placeholder === "Password" ? true : false}
    />
  );
};

const styles = StyleSheet.create({
  InputBox: {
    alignSelf: "stretch",
    marginBottom: 30,
    color: "black",
    borderBottomColor: "#59cbbd",
    borderBottomWidth: 1
  }
});

export default InputBox;
