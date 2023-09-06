import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { DokterView } from "../../components";


const Dokter = () => {
  return (
    <LinearGradient
      colors={["#BDEDF8", "#BDEDF8"]}
      style={styles.container}
    >
      <Text style={styles.Text}>List of all doctors</Text>
      <DokterView></DokterView>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Dokter;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  Text:{
    fontSize: 30,
    fontWeight: "bold",
    marginTop: windowHeight * 0.08,
    marginLeft: 25,
    color: '#555454'
  }
});
