import React from "react";
import styles from "../constants/style";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SidebarItem = props => {
  return (
    <View style={styles.IconSubText}>
      <Icon name={props.name} size={24} style={styles.sideMenuIcon} />
      <Image
        source={{
          uri: props.uri
        }}
        style={styles.sideMenuIcon}
      />

      <Text
        style={styles.menuText}
        onPress={() => {
          this.props.navigation.navigate("First");
        }}
      >
        {" "}
        {props.text}{" "}
      </Text>
    </View>
  );
};

export default SidebarItem;
