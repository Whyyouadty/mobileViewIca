import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  HomeActive,
  Home,
  JadwalActive,
  Jadwal,
  Tambah,
  NotivActive,
  Notiv,
  DoctorActive,
  Doctor,
} from "../../asset";
import { WARNA_UTAMA, WARNA_DASAR } from "../../utils/constant";

const TabItem = ({ onPress, isFocused, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Home")
      return isFocused ? <HomeActive /> : <Home width={24} height={24} />;
    if (label === "Jadwal")
      return isFocused ? <JadwalActive /> : <Jadwal width={24} height={24} />;
    if (label === "Registrasi")
      return isFocused ? <Tambah  /> : <Tambah  />;
    if (label === "Notifikasi")
      return isFocused ? <NotivActive /> : <Notiv width={24} height={24} />;
    if (label === "Dokter")
      return isFocused ? <DoctorActive /> : <Doctor width={24} height={24} />;

    return <HomeActive />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon width={24} height={24} />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
