import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//local imports
import RegestrationScreen from './screens/RegestrationScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <RegestrationScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#455A64",
    paddingLeft: 60,
    paddingRight: 60
  }
});
