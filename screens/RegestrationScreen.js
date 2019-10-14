import React from "react";
import { StyleSheet, Text, View, Form } from "react-native";

//components
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ImageUploader from "../components/ImagePicker"

//styles
import styles from '../constants/style'

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <View style={ScreenStyles.headerWrapper}>
        <Text style={ScreenStyles.header}>Register</Text>
      </View>
      <ImageUploader />
      <InputBox placeholder="Name" />
      <InputBox placeholder="Email" />
      <InputBox placeholder="Password" />
      <Button text="Register" />
    </View>
  );
}

const ScreenStyles = StyleSheet.create({
  headerWrapper: {
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
    marginBottom: 40
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    borderBottomColor: "#199187",
    borderBottomWidth: 1
  }
});
