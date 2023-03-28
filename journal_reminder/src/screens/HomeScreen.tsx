import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

/**
 * Represents the HomeScreen component.
 * @param navigation The navigation object used to navigate to other screens.
 * @returns The HomeScreen component.
 */
export default function HomeScreen({ navigation }) {
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [weekday, setWeekday] = useState([]);
  const [rhythm, setRhythm] = useState([]);
  const [reminderCount, setReminderCount] = useState([]);

  async function getStatus() {
    const activateStorage = JSON.parse(await AsyncStorage.getItem("activate"));

    if (activateStorage) {
      setStatus(activateStorage);
      return activateStorage;
    } else {
      return status;
    }
  }

  async function getRhythm() {
    const rhythmStorage = JSON.parse(await AsyncStorage.getItem("rhythm"));

    if (rhythmStorage) {
      setRhythm(rhythmStorage);
      return rhythmStorage;
    } else {
      setRhythm(["No rhythm selected"]);
    }
  }

  async function getWeekday() {
    const weekdayStorage = JSON.parse(await AsyncStorage.getItem("weekday"));

    if (weekdayStorage) {
      setWeekday(weekdayStorage);
      return weekdayStorage;
    } else {
      setWeekday(["No weekday selected"]);
    }
  }

  async function getTime() {
    const timeStorage = JSON.parse(await AsyncStorage.getItem("time"));

    if (timeStorage) {
      const parsedTime = timeStorage.hours + ":" + timeStorage.minutes;
      setTime(parsedTime);
      return parsedTime;
    } else {
      setTime("No time selected");
      return time;
    }
  }

  async function getDate() {
    const dateStorage = await AsyncStorage.getItem("date");

    if (dateStorage != null) {
      setDate(new Date(dateStorage));
      return dateStorage;
    } else {
      var dateCheck = new Date(dateStorage);
      var isDateValid = !isNaN(dateCheck.valueOf());
      if (!isDateValid) {
        setDate(new Date("No date selected"));
        console.log(date);
      } else {
        return date;
      }
    }
  }

  async function getReminderCount() {
    const reminderCountStorage = await AsyncStorage.getItem("remindercount");

    if (reminderCountStorage) {
      setReminderCount([reminderCountStorage.toString()]);
      return reminderCountStorage;
    } else {
      return reminderCount;
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      getStatus();
      getRhythm();
      getWeekday();
      getTime();
      getDate();
      getReminderCount();
    }, [])
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTitle} variant="headlineLarge">
          Current Settings
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Active: {status == true ? "Yes" : "No"}
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Rhythm: {rhythm}
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Weekday: {weekday}
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Time: {time}
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Date: {moment(date).format("Do")}
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Reminders: {reminderCount}
        </Text>

        <Button
          mode="contained-tonal"
          style={styles.button}
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          Edit
        </Button>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1B1F",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  textTitle: {
    color: "#D0BCFF",
  },
  text: {
    color: "#fff",
  },
  button: {
    marginTop: "5%",
    backgroundColor: "#fff",
    color: "#1C1B1F",
    borderRadius: 12,
  },
});
