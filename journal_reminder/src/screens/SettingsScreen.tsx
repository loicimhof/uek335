import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import RhythmDropDown from "../components/RhythmDropDown";
import WeekdayDropDown from "../components/WeekdayDropDown";
import DatePicker from "../components/DatePicker";
import Reminder from "../components/Reminder";
import Activate from "../components/Activate";
import TimePicker from "../components/TimePicker";

/**
 * Represents the SettingsScreen component.
 * @param navigation The navigation object used to navigate to other screens.
 * @returns The SettingsScreen component.
 */
export default function SettingsScreen({ navigation }) {
  return (
    <>
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={{ margin: "5%" }}>
            <Activate />
          </View>

          <View style={styles.dropdown}>
            <RhythmDropDown />
          </View>

          <View style={styles.dropdown}>
            <WeekdayDropDown />
          </View>

          <View style={{ margin: "5%" }}>
            <TimePicker />
          </View>

          <View style={{ margin: "5%" }}>
            <DatePicker />
          </View>

          <View style={{ margin: "5%" }}>
            <Reminder />
          </View>

          <View
            style={{
              margin: "5%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              mode="contained-tonal"
              style={{ borderRadius: 12 }}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              Cancel
            </Button>

            <Button
              mode="contained-tonal"
              style={{ backgroundColor: "#00ff69", borderRadius: 12 }}
              onPress={() => {
                navigation.navigate("Home");
              }}
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
  textTitle: {
    color: "#D0BCFF",
  },
  text: {
    color: "#fff",
  },
  dropdown: {
    margin: "5%",
  },
  button: {
    backgroundColor: "#fff",
    color: "#1C1B1F",
  },
});
