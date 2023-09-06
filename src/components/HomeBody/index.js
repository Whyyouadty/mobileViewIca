import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Item1, Item2, Clock } from "../../asset";
import React from "react";
import { Jadwal } from "../../asset";
import { useNavigation } from "@react-navigation/native";


const HomeBody = () => {
  const navigation = useNavigation();

  const navigateToRekap = () => {
    navigation.navigate("Jadwal");
  };

  return (
    <View style={styles.container}>
      <View style={styles.TextHeader}>
        <Text style={styles.Text1}>My appointment</Text>
        <TouchableOpacity onPress={navigateToRekap}>
          <Text style={styles.Text2}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item1}>
        <View style={styles.ItemHeader}>
          <Text style={styles.TextAppoin}>Appointment date</Text>
          <View style={styles.ItemHeaderBodt}>
            <Image source={Clock} style={styles.clock}></Image>
            <Text style={styles.TextDate}>Sen Agu 20 . 08:00-09:00 Am</Text>
          </View>
        </View>
        <View style={styles.ItemBody}>
          <Image source={Item1} style={styles.Image}></Image>
          <View style={styles.containertextimage}>
            <Text style={styles.TextInama}>Dr.Tamvan Bin Berani</Text>
            <Text style={styles.Textpoli}>Poli Kejiwaan</Text>
          </View>
        </View>
      </View>
      <View style={styles.item2}>
        <View style={styles.ItemHeader}>
          <Text style={styles.TextAppoin}>Appointment date</Text>
          <View style={styles.ItemHeaderBodt}>
            <Image source={Clock} style={styles.clock}></Image>
            <Text style={styles.TextDate}>Sen Agu 20 . 08:00-09:00 Am</Text>
          </View>
        </View>
        <View style={styles.ItemBody}>
          <Image source={Item2} style={styles.Image}></Image>
          <View style={styles.containertextimage}>
            <Text style={styles.TextInama}>Dr.Cantika Binti Pargoy</Text>
            <Text style={styles.Textpoli}>Poli Kegoyangan</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default HomeBody;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  TextHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 20,
  },
  Text1: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#555454",
    marginTop: -17,
  },
  Text2: {
    fontSize: 15,
  },
  item1: {
    width: windowWidth,
    height: windowHeight * 0.18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 25,
    marginTop: 10,
    justifyContent: "center",
  },
  ItemHeader: {
    marginLeft: 25,
    marginTop: -20,
    width: 200,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
  },
  TextAppoin: {
    color: "#B8B6B6",
    marginTop: 20,
  },
  ItemHeaderBodt: {
    flexDirection: "row",
  },
  clock: {
    marginTop: 9,
    width: 13,
    height: 13,
  },
  TextDate: {
    marginTop: 5,
    paddingLeft: 10,
    color: "#555454",
  },
  ItemBody: {
    marginTop: 10,
  },
  item2: {
    width: windowWidth,
    height: windowHeight * 0.18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 25,
    marginTop: 10,
    justifyContent: "center",
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 15,
    position: "absolute",
  },
  containertextimage: {
    paddingLeft: 95,
    paddingTop: 15,
  },
  TextInama: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555454",
  },
  Textpoli: {
    fontSize: 15,
    color: "#B8B6B6",
    marginTop: 6,
  },
});
