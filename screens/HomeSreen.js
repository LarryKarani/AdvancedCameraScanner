import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { withNavigation } from "react-navigation";

//components
import Button from "../components/Button";

//styles
import styles from '../constants/style'
class  HomeScreen extends React.Component {
  render() {
     return (
       <View style={styles.container}>
         <Image style={image.logo} source={require("../assets/logo.png")} />
         <Button
           text="Login"
           onpress={() => {
             this.props.navigation.navigate("Login");
           }}
         />
         <Button
           text="Register"
           style={{ backgroundColor: "#263238" }}
           onpress={() => {
             this.props.navigation.navigate("Register");
           }}
         />
       </View>
     );

  }
}

const image = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50
  }
});

export default withNavigation(HomeScreen);