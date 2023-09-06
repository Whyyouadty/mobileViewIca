import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { LogoBulat, LogoDokter } from "../../asset";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoBulat} style={styles.image}></Image>
      <View style={styles.TextLogo}>
        <Text style={styles.TextSistem}>Sistem</Text>
        <Text style={styles.TextAbsen}>Absensi Otomatis</Text>
      </View>
      <View style={styles.helo}>
        <Text style={styles.selamat}>Wellcome !</Text>
        <Text style={styles.nama}>Musfira Hairun Nisa</Text>
        <Text style={styles.doa}>Semoga harimu menyenangkan</Text>
      </View>
      <View>
        <Image source={LogoDokter} style={styles.Lodo}></Image>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.4,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 5,
  },
  image: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.09,
    marginTop: 40,
    marginLeft: 10,
  },
  TextLogo: {
    marginTop: -windowHeight * 0.09,
    marginLeft: 95,
  },
  TextSistem: {
    color: "#00C4CC",
    fontSize: 25,
    fontWeight: "bold",
  },
  TextAbsen: {
    color: "#00C4CC",
    fontSize: 18,
  },
  helo: {
    marginTop: windowHeight * 0.11,
    marginLeft: 20,
  },
  selamat: {
    color: "#555454",
    fontSize: 30,
    fontWeight: "bold",
  },
  nama: {
    color: "#555454",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },
  doa: {
    color: "#B8B6B6",
    fontSize: 13,
    marginTop: 10,
  },
  Lodo: {
    width: 200,
    height: 250,
    position: "absolute",
    marginLeft: windowWidth * 0.45,
    marginTop: -windowHeight * 0.324,
  },
});
