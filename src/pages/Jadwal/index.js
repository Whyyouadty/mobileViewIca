import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { JadwalView } from "../../components";

const Jadwal = () => {
  return (
    <LinearGradient colors={["#BDEDF8", "#ffffff", "#BDEDF8"]} style={styles.container}>
      <Text style={styles.Text}>Schedule</Text>
      <JadwalView></JadwalView>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Jadwal;

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
