import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Item1, Item2, Item3, Item4, Item5, Clock } from "../../asset";

const doctorsData = [
  {
    photo: Item1,
    name: "Dr.Tamvan Bin Berani",
    specialization: "Poli Kejiwaan",
  },
];
const doctorsData2 = [
  {
    photo: Item2,
    name: "Dr.Cantika Binti Pargoy",
    specialization: "Poli Kegoyangan",
  },
];
const doctorsData3 = [
  {
    photo: Item3,
    name: "Dr.Ganteng jag*ng*ck",
    specialization: "Poli Perkocokan",
  },
];
const doctorsData4 = [
  {
    photo: Item4,
    name: "Dr.Sukaaasukasaja",
    specialization: "Poli Terserah",
  },
];
const doctorsData5 = [
  {
    photo: Item5,
    name: "Dr.Sugionobinsex",
    specialization: "Poli Kejepangan",
  },
];

const AllDokter = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {doctorsData.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan Bin Berani</Text>
              <Text style={styles.Textpoli}>Poli Kejiwaan</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData2.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item2} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Cantika Binti Pargoy</Text>
              <Text style={styles.Textpoli}>Poli Kegoyangan</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData3.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item3} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Ganteng jag*ng*ck</Text>
              <Text style={styles.Textpoli}>Poli Perkocokan</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData4.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item4} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Sukaaasukasaja</Text>
              <Text style={styles.Textpoli}>Poli Terserah</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData5.map((doctor, index) => (
        <TouchableOpacity key={index}
            onPress={() => handleItemPress(doctor)} style={styles.item}>
          <Image source={Item5} style={styles.Image}></Image>
          <View style={styles.containertextimage}>
            <Text style={styles.TextInama}>Dr.Sugionobinsex</Text>
            <Text style={styles.Textpoli}>Poli Kejepangan</Text>
          </View>
        </TouchableOpacity>
        ))}
        {doctorsData.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan Bin Berani</Text>
              <Text style={styles.Textpoli}>Poli Kejiwaan</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData2.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item2} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Cantika Binti Pargoy</Text>
              <Text style={styles.Textpoli}>Poli Kegoyangan</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData3.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item3} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Ganteng jag*ng*ck</Text>
              <Text style={styles.Textpoli}>Poli Perkocokan</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData4.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item4} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Sukaaasukasaja</Text>
              <Text style={styles.Textpoli}>Poli Terserah</Text>
            </View>
          </TouchableOpacity>
        ))}
        {doctorsData5.map((doctor, index) => (
        <TouchableOpacity key={index}
            onPress={() => handleItemPress(doctor)} style={styles.item}>
          <Image source={Item5} style={styles.Image}></Image>
          <View style={styles.containertextimage}>
            <Text style={styles.TextInama}>Dr.Sugionobinsex</Text>
            <Text style={styles.Textpoli}>Poli Kejepangan</Text>
          </View>
        </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedItem && (
            <>
              <Image source={selectedItem.photo} style={styles.modalImage} />
              <Text style={styles.TextInama}>{selectedItem.name}</Text>
              <Text style={styles.Textpoli}>{selectedItem.specialization}</Text>
              {/* Add other details here */}
              <TouchableOpacity
                onPress={handleCloseModal}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default AllDokter;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  item: {
    width: windowWidth,
    height: windowHeight * 0.13,
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
    position: "absolute",
  },
  modalImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  containertextimage: {
    paddingLeft: 100,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
