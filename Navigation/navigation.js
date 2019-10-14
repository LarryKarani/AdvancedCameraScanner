import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeSreen";
import RegistrationScreen from "../screens/RegestrationScreen";
import Icon from "react-native-vector-icons/FontAwesome";


const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Register: {
      screen: RegistrationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="profile" size={25} color={tintColor} />
        )
      }
    }
  }, 
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

export default bottomTabNavigator;
