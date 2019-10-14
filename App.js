import React from "react";
import { Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

//Screens imports
import RegestrationScreen from "./screens/RegestrationScreen";
import CameraScanner from "./screens/CameraScanner";
import HomeScreen from "./screens/HomeSreen";
import Custom_Side_Menu from "./screens/SideMenuScreen";
import TableData from "./screens/ScannedData";
import Navigation from "./screens/Navigation"

//components
import ProfileIcon from './components/ProfileIcon'

const bottomNavigation = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "balance",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="logo-usd" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: CameraScanner,
    navigationOptions: {
      tabBarLabel: "",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-contact"
          color={tintColor}
          size={24}
          onPress={() => this.props.navigationProps.toggleDrawer()}
        />
      )
    }
  },
  Pick: {
    screen: RegestrationScreen,
    navigationOptions: {
      tabBarLabel: "",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-pin" color={tintColor} size={24} />
      )
    }
  },
  Drop: {
    screen: Navigation,
    navigationOptions: {
      tabBarLabel: "",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-download" color={tintColor} size={24} />
      )
    }
  }
});

const ProfileNavigation = createDrawerNavigator(
  {
    bottomNavigation
  },
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get("window").width - 130
  }
);

const Navigator = createAppContainer(ProfileNavigation, bottomNavigation);

export default function App() {
  return <Navigator />;
}
