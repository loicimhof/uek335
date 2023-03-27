import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import React from "react";
import RhythmDropDown from "../components/RhythmDropDown";
import WeekdayDropDown from "../components/WeekdayDropDown";
import DatePicker from "../components/DatePicker";
import Reminder from "../components/Reminder";
import Activate from "../components/Activate";

export default function SettingsScreen({ navigation }: any) {
  return (
    <>
      <View style={styles.background}>
        <Text style={styles.textTitle} variant="headlineLarge">
          Settings
        </Text>
        <View style={styles.container}>

        <View style={{ margin: "5%" }}>
            <Activate />
          </View>


      
          <View style={styles.dropdown}>
            <RhythmDropDown />
          </View>

          <View style={{ margin: "5%" }}>
            <WeekdayDropDown />
          </View>

          <View style={{ margin: "5%" }}>
            <DatePicker />
          </View>

          <View style={{ margin: "5%" }}>
            <Reminder />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              mode="contained-tonal"
              onPress={() => navigation.navigate("Home")}
            >
              Cancel
            </Button>

            <Button
              style={{ backgroundColor: "#00ff69" }}
              mode="contained-tonal"
              onPress={() => navigation.navigate("Home")}
            >
              Save
            </Button>
          </View>

          <StatusBar style="auto" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#1C1B1F",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  container: {
    margin: "5%",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    color: "#1C1B1F",
  },
  text: {
    color: "#fff",
  },
  textTitle: {
    color: "#D0BCFF",
  },
  dropdown: {
    margin: "5%",
  },
});
