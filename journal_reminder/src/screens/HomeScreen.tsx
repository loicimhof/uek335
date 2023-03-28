import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
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
      setDate(weekdayStorage);
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
    } else {
      setTime("No time selected");
    }
  }

  async function getDate() {
    const dateStorage = await AsyncStorage.getItem("date");

    if (dateStorage) {
      setDate(new Date(dateStorage));
      return dateStorage;
    } else {
      return date;
    }
  }

  async function handleClear() {
    await AsyncStorage.clear();
  }

  useFocusEffect(() => {
    getStatus();
    getRhythm();
    getWeekday();
    getTime();
    getDate();
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTitle} variant="headlineLarge">
          Current Settings
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Activ: {status == true ? "yes" : "no"}
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
          Reminder:
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

        <Button
          mode="contained-tonal"
          style={styles.button}
          onPress={() => {
            handleClear();
          }}
        >
          Clear
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
  },
});
