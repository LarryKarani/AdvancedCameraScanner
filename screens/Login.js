import React from "react";
import { StyleSheet, Text, View, Form } from "react-native";
import { withNavigation } from "react-navigation";

//components
import InputBox from "../components/InputBox";
import Button from "../components/Button";

//styles
import styles from "../constants/style";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputBox placeholder="Email" />
        <InputBox placeholder="Password" />
        <Button
          text="Login"
          onpress={() => {
            this.props.navigation.navigate("Profile");
          }}
        />
      </View>
    );
  }
}

const ScreenStyles = StyleSheet.create({
  headerWrapper: {
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
    marginBottom: 40
  },
  header: {
    fontSize: 15,
    color: "black"
  }
});

export default withNavigation(Login);
