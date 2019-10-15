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
        <View style={ScreenStyles.headerWrapper}>
          <Text style={ScreenStyles.header}>Login</Text>
        </View>
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
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    borderBottomColor: "#199187",
    borderBottomWidth: 1
  }
});

export default withNavigation(Login);
