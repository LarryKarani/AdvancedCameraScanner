//External Libraries
import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default class ImageUploader extends React.Component {
  state = {
    image: null
  };

  handleChange = value => {
    this.setState({
      image: value
    });
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [2, 2]
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <Text style={styles.btntext} onPress={this.pickImage}>
          Upload profile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 30
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
