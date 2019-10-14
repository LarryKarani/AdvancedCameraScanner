import React from "react";
import {
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions
} from "react-native";


import styles from "../constants/style";
import SidebarItem from "../components/SidbarSingleItem";

class Custom_Side_Menu extends React.Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.sideMenuProfileIcon}
        />

        <Text
          style={{
            marginTop: 5,
            fontSize: 15,
            color: "#222222"
          }}
        >
          Larry Karani
        </Text>

        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 40
          }}
        />

        <View style={{ width: "100%" }}>
          <SidebarItem text="Home" name="ios-home" />
          <SidebarItem text="Dashboard" name="ios-business" />
          <SidebarItem text="Pay info" name="ios-cash" />
          <SidebarItem text="Feedback" name="ios-bowtie" />
          <SidebarItem text="My info" name="ios-archive" />
          <SidebarItem text="Help" name="ios-desktop" />
          <SidebarItem text="Settings" name="ios-settings" />
        </View>

        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15
          }}
        />
      </View>
    );
  }
}

export default Custom_Side_Menu;
