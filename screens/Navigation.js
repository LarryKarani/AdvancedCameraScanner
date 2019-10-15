import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
export default class Navigation extends React.Component {
  render() {
    let markers = [
      {
        latitude: -1.219799,
        longitude: 36.886331,
        title: "Foo Place",
        subtitle: "1234 Foo Drive"
      }
    ];
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          annotations={markers}
          region={{
            latitude: -1.219799,
            longitude: 36.886331,
            title: "Foo Place",
            subtitle: "1234 Foo Drive",
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
