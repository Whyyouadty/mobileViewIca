import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { HomeHeader, HomeBody } from "../../components";

const Home = () => {
  return (
    <LinearGradient colors={["#BDEDF8", "#BDEDF8"]} style={styles.container}>
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Home;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
});
