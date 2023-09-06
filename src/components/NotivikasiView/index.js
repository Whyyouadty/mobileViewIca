import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Item1, Item2, Item3, Item4, Item5, Clock } from "../../asset";

const pesanAwal = [
  {
    photo: Item1,
    name: "Dr.Tamvan binberani",
    specialization: "Administrasi",
    Pesan: "Selamat datang di Rumah Sakit Sejahtera. Halo, Kami ingin mengucapkan selamat datang di Rumah Sakit Sejahtera. Registrasi Anda telah berhasil diproses. Anda sekarang memiliki akses penuh ke layanan kami. Jangan ragu untuk menghubungi kami jika Anda membutuhkan bantuan atau memiliki pertanyaan. Kami siap melayani Anda dengan baik. Terima kasih sudah memilih Rumah Sakit Sejahtera sebagai pilihan Anda.Salam, Tim Layanan Pelanggan Rumah Sakit Sejahtera",
  },
  // ... tambahkan pesan lainnya jika ada
];
const NotivikasiView = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [pesan, setPesan] = useState(pesanAwal);
  const handleItemPress = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleHapusSemuaPesan = () => {
    setPesan([]); // Menghapus semua pesan dengan mengganti state pesan menjadi array kosong
    setIsModalVisible(false); // Menutup modal jika terbuka
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {pesan.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(doctor)}
            style={styles.item}
          >
            <Image source={Item1} style={styles.Image}></Image>
            <View style={styles.containertextimage}>
              <Text style={styles.TextInama}>Dr.Tamvan binberani</Text>
              <Text style={styles.Textpoli}>Administrasi</Text>
              <Text style={styles.IsiText}>
                Hallo, Registrasi anda telah berhasil di proses
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={handleHapusSemuaPesan}
        style={styles.hapusButton}
      >
        <Text style={styles.hapusButtonText}>Clear all</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainerPopup}>
            {selectedItem && (
              <>
                <Image source={selectedItem.photo} style={styles.modalImage} />
                <Text style={styles.TextInama}>{selectedItem.name}</Text>
                <Text style={styles.Textpoli}>
                  {selectedItem.specialization}
                </Text>
                <Text style={styles.IsiText}>{selectedItem.Pesan}</Text>
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
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default NotivikasiView;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: windowWidth,
    height: windowHeight * 0.78,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  hapusButton: {
    position: "absolute",
    top: 1, // Atur jarak dari atas container
    right: 1, // Atur jarak dari kanan container
    backgroundColor: "#F57676",
    padding: 10,
    borderRadius: 10,
  },
  hapusButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  scrollContainer: {
    marginTop: 35,
    marginBottom: 20,
  },
  item: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9,
    height: windowHeight * 0.09,
    backgroundColor: "#F1EFEF",
    borderRadius: 10,
    flexDirection: "row",
  },
  Image: {
    width: 30,
    height: 30,
  },
  containertextimage: {
    marginLeft: 20,
  },
  TextInama: {
    margin: 2,
    fontSize: 15,
    fontWeight: "bold",
  },
  Textpoli: {
    margin: 2,
    fontSize: 12,
    color: "#B2B1B1",
  },
  IsiText: {
    margin: 2,
    fontSize: 13,
    color: "#555454",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20, // Menambahkan margin untuk memberikan jarak dari tepi layar
    borderRadius: 10, // Mengatur border radius agar tampil lebih rapi
    backgroundColor: "#B2B1B1", // Warna latar belakang modal
    padding: 20, // Menambahkan padding untuk isi modal
    width: "90%", // Mengatur lebar modal
    height: "50%", // Mengatur tinggi modal
  },
  modalImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Warna latar belakang transparan untuk overlay
  },

  modalContainerPopup: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%", // Menyesuaikan ukuran modal pop-up
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#F57676",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end", // Menempatkan tombol di kanan atas modal
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
