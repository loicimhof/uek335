import ReminderCard from "../Components/ReminderCard";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Provider, Text } from "react-native-paper";

import React, { useState } from "react";
import RhythmDropDown from "../Components/RhythmDropDown";
import WeekdayDropDown from "../Components/WeekdayDropDown";
import DatePicker from "../Components/DatePicker";

export default function SettingsScreen({ navigation }: any, selectedValue: string) {
  return (
    <Provider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.textTitle} variant="headlineLarge">Settings</Text>
        {/* <Button mode="contained-tonal"> Edit</Button> */}
        <RhythmDropDown />
        <WeekdayDropDown />
        <DatePicker />

        <ReminderCard />
        <Button
          style={{ backgroundColor: "#00ff69" }}
          mode="contained-tonal"
          onPress={() => navigation.navigate("Home")}
        >
          {" "}
          save
        </Button>
        <Button
          mode="contained-tonal"
          onPress={() => navigation.navigate("Home")}
        >
          {" "}
          cancel
        </Button>
      </View>
 
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1B1F',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#fff',
    color: '#1C1B1F',
  },
  text: {
    color: '#fff',
  },
  textTitle: {
    color: '#D0BCFF',
  },
});