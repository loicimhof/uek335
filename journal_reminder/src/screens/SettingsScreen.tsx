import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import RhythmDropDown from "../components/RhythmDropDown";
import WeekdayDropDown from "../components/WeekdayDropDown";
import DatePicker from "../components/DatePicker";
import Reminder from "../components/Reminder";
import Activate from "../components/Activate";

/**
 * Represents the Settings Screen component.
 * @param navigation - The navigation object used to navigate to other screens.
 * @returns The Settings Screen component.
 */
export default function SettingsScreen({ navigation }: any) {
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
              onPress={() => navigation.navigate("Home")}
              style={{ borderRadius: 12 }}
            >
              Cancel
            </Button>

            <Button
              style={{ backgroundColor: "#00ff69", borderRadius: 12 }}
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

  /**
   * The style for the title of the Settings Screen component.
   */
  textTitle: {
    color: "#D0BCFF",
  },
  dropdown: {
    margin: "5%",
  },
});
