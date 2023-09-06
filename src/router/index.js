import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomNavigation } from "../components";
import {  Splash, Home, Jadwal, Registrasi, Notifikasi, Dokter } from "../pages";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Jadwal"
        component={Jadwal}
        options={{ headerShown: false, tabBarLabel: 'Jadwal' }}
      />
      <Tab.Screen
        name="Registrasi"
        component={Registrasi}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Dokter"
        component={Dokter}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
