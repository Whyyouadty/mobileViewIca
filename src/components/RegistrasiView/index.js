import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const RegistrasiView = () => {
  return (
    <View style={styles.container}>
      <Text>RegistrasiView</Text>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default RegistrasiView;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: windowWidth * 0.9,
    height: windowHeight * 0.78,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: windowWidth * 0.046,
    borderRadius: 10,
  },
});
