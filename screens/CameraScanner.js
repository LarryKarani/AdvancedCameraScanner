import React from "react";
import {
  ActivityIndicator,
  Clipboard,
  FlatList,
  Image,
  Share,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import uuid from "uuid";
import Environment from "../config/environment";
import firebase from "../config/firebase";
import 'firebase/storage'
import { withNavigation } from "react-navigation";
import { Button, Card, Icon } from "react-native-elements";

class CameraScanner extends React.Component {
  state = {
    image: null,
    uploading: false,
    googleResponse: null
  };

  static navigationOptions = {
    title: "Profile"
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }

  render() {
    let { image } = this.state;

    return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {image || this.state.uploading ? null : (
          <TouchableOpacity style={styles.balance}>
            <Text style={styles.getStartedText}>Balance: $46.00 </Text>
          </TouchableOpacity>
        )}
        {this.state.uploading && (
           <View
           title="loading"
           style={{
             flex:1,
             marginTop: 20,
             width: 360,
             padding: 10,
             borderRadius: 7,
             alignItems: 'center',
             height: 300,
           }}
         >


         </View>
      
        )}

        {!image && !this.state.uploading && (
          <Card
            title="Advanced Scanner"
            image={require("../assets/back.jpeg")}
            containerStyle={{
              marginTop: 20,
              width: 360,
              padding: 10,
              borderRadius: 7,
            }}
            imageStyle={{
              width: 200,
              height: 300,
              borderRadius: 20
            }}
          >
          </Card>
        )}

        <View style={styles.helpContainer}>
          {this._maybeRenderImage()}
          {this._maybeRenderUploadingOverlay()}
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={this._pickImage}>
            <Text style={styles.btntext}>{!image ? "Scan" : "Scan again"}</Text>
          </TouchableOpacity>

          {image && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("Table");
              }}
            >
              <Text style={styles.btntext}>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  organize = array => {
    return array.map(function(item, i) {
      return (
        <View key={i}>
          <Text>{item}</Text>
        </View>
      );
    });
  };

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      console.log("yessss");
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center"
            }
          ]}
        >
          <ActivityIndicator color="red" animating size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image, googleResponse } = this.state;
    if (!image) {
      return;
    }

    return (
      <Card
        image={{ uri: image }}
        containerStyle={{
          marginTop: 40,
          width: 360,
          padding: 30,
          borderRadius: 7
        }}
        imageStyle={{
          width: 200,
          height: 250,
          borderRadius: 20

        }}
      >
        <View style={{ marginBottom: 20 , alignItems: 'center' }}>
          {this.state.googleResponse && (
            <View>
              <Text>Descr: Suavitel 500ML</Text>
              <Text>Mtl: HDPE</Text>
              <Text>QTY: 1</Text>
              <Text>RV: 0.75</Text>
            </View>
            // <FlatList
            //   data={this.state.googleResponse.responses[0].labelAnnotations}
            //   extraData={this.state}
            //   keyExtractor={this._keyExtractor}
            //   renderItem={({ item }) => <Text>{item.description}</Text>}
            // />
          )}
        </View>
        {!this.state.googleResponse ? (
          <Button
            icon={<Icon name="g-translate" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              borderRadius: 7,
              backgroundColor: "#59cbbd"
            }}
            title="Analyze"
            onPress={() => this.submitToGoogle()}
          />
        ) : null}
      </Card>
    );
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = item => {
    <Text>response: {JSON.stringify(item)}</Text>;
  };

  _share = () => {
    Share.share({
      message: JSON.stringify(this.state.googleResponse.responses),
      title: "Check it out",
      url: this.state.image
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert("Copied to clipboard");
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    this._handleImagePicked(pickerResult);
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
    }
  };

  submitToGoogle = async () => {
    try {
      this.setState({ uploading: true });
      let { image } = this.state;
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "LABEL_DETECTION", maxResults: 10 },
              { type: "LANDMARK_DETECTION", maxResults: 5 },
              { type: "FACE_DETECTION", maxResults: 5 },
              { type: "LOGO_DETECTION", maxResults: 5 },
              { type: "TEXT_DETECTION", maxResults: 5 },
              { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
              { type: "SAFE_SEARCH_DETECTION", maxResults: 5 },
              { type: "IMAGE_PROPERTIES", maxResults: 5 },
              { type: "CROP_HINTS", maxResults: 5 },
              { type: "WEB_DETECTION", maxResults: 5 }
            ],
            image: {
              source: {
                imageUri: image
              }
            }
          }
        ]
      });
      let response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=" +
          Environment["GOOGLE_CLOUD_VISION_API_KEY"],
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: body
        }
      );
      let responseJson = await response.json();
      this.setState({
        googleResponse: responseJson,
        uploading: false
      });
    } catch (error) {
      console.log(error);
    }
  };
}

async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  blob.close();

  return await snapshot.ref.getDownloadURL();
}

export default withNavigation(CameraScanner);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 10,
    alignItems: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingBottom: 20
  },

  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  balance: {
    fontSize: 17,
    color: "green",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    borderRadius: 20
  },
  getStartedText: {
    fontSize: 17,
    color: "green",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 9,
    borderRadius: 8
  },

  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  button: {
    marginTop: 15,
    marginBottom: 20,
    padding: 7,
    backgroundColor: "#59cbbd",
    borderRadius: 10,
    alignItems: "center",
    width: 200
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
