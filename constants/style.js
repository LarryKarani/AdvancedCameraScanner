import { StyleSheet, Text, View, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#455A64",
    paddingLeft: 60,
    paddingRight: 60,
    alignItems: "center"
  },
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center"
  },

  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20
  },

  sideMenuProfileIcon: {
    marginTop: 70,
    resizeMode: "center",
    width: 150,
    height: 150,
    borderRadius: 50
  },

  sideMenuIcon: {
    //resizeMode: "center",
    marginLeft: 20
  },

  menuText: {
    fontSize: 15,
    color: "#222222"
  },
  IconSubText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  }
});

export default styles;
