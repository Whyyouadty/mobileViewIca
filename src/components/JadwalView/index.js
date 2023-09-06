import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Item1, Item2, Item3, Item4, Item5, Clock } from "../../asset";

const JadwalView = () => {
  const [isCurrent, setIsCurrent] = useState(true);
  const [items, setItems] = useState([Item3, Item4, Item5]);

  const toggleView = () => {
    setIsCurrent(!isCurrent);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            isCurrent ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => isCurrent || toggleView()}
        >
          <Text
            style={[
              styles.toggleButtonText,
              isCurrent ? styles.activeText : styles.inactiveText,
            ]}
          >
            Sedang Berlangsung
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !isCurrent ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => !isCurrent || toggleView()}
        >
          <Text
            style={[
              styles.toggleButtonText,
              !isCurrent ? styles.activeText : styles.inactiveText,
            ]}
          >
            Akan Datang
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView}>
        {isCurrent ? (
          <View style={styles.item}>
            <View style={styles.ItemHeader}>
              <Text style={styles.TextAppoin}>Appointment date</Text>
              <View style={styles.ItemHeaderBodt}>
                <Image source={Clock} style={styles.clock} />
                <Text style={styles.TextDate}>Sen Agu 20 . 08:00-09:00 Am</Text>
              </View>
            </View>
            <View style={styles.ItemBody}>
              <Image source={Item1} style={styles.Image} />
              <View style={styles.containertextimage}>
                <Text style={styles.TextInama}>Dr.Tamvan Bin Berani</Text>
                <Text style={styles.Textpoli}>Poli Kejiwaan</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.item}>
            <View style={styles.ItemHeader}>
              <Text style={styles.TextAppoin}>Appointment date</Text>
              <View style={styles.ItemHeaderBodt}>
                <Image source={Clock} style={styles.clock} />
                <Text style={styles.TextDate}>Sen Agu 20 . 08:00-09:00 Am</Text>
              </View>
            </View>
            <View style={styles.ItemBody}>
              <Image source={Item2} style={styles.Image} />
              <View style={styles.containertextimage}>
                <Text style={styles.TextInama}>Dr.Cantika jago pargoy</Text>
                <Text style={styles.Textpoli}>Poli Kejiwaan</Text>
              </View>
            </View>
          </View>
        )}

        {/* Menampilkan daftar item dari state 'items' */}
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.ItemHeader}>
              <Text style={styles.TextAppoin}>Appointment date</Text>
              <View style={styles.ItemHeaderBodt}>
                <Image source={Clock} style={styles.clock} />
                <Text style={styles.TextDate}>Sen Agu 20 . 08:00-09:00 Am</Text>
              </View>
            </View>
            <View style={styles.ItemBody}>
              <Image source={item} style={styles.Image} />
              <View style={styles.containertextimage}>
                <Text style={styles.TextInama}>Dr.Tamvan Bin Berani</Text>
                <Text style={styles.Textpoli}>Poli Kejiwaan</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default JadwalView;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: windowWidth * 0.9,
    height: windowHeight * 0.78,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: windowWidth * 0.046,
    borderRadius: 20,
  },
  ScrollView: {
    marginTop: 15,
    marginBottom: 15,
  },
  item: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.18,
    backgroundColor: "#eee",
    borderRadius: 50,
    marginTop: 10,
    justifyContent: "center",
    elevation: 5,
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
  toggleContainer: {
    flexDirection: "row",
    width: windowWidth * 0.8,
    height: windowHeight * 0.055,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    marginTop: 10,
    elevation: 5,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: "#fff",
  },
  inactiveButton: {
    backgroundColor: "#D9D9D9",
  },
  toggleButtonText: {
    fontWeight: "bold",
  },
  activeText: {
    color: '#A7A3A3',
  },
  inactiveText: {
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: "#fff",
  },
});
