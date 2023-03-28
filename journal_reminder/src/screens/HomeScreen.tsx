import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

/**
 * This component represents the home page of the app.
 *
 * @param {object} navigation - An object that provides functions for navigating between app screens.
 */
export default function HomeScreen({ navigation }: any) {
  const [status, setStatus] = useState(false);
  const [rhythm, setRhythm] = useState([]); // ACHTUNG ??????????
  const [weekday, setWeekday] = useState([]);

  let statusToPrint = `${status}`;
  let rhythmToPrint = `${rhythm}`;
  let weekdayToPrint = `${weekday}`;

  /**
   * This function is called when the user clicks on the "Go to settings page" button.
   */
  const handleSettingsNavigation = () => {
    navigation.navigate("Settings");
  };

  async function myStatusFunction() {
    const activationStatus = JSON.parse(await AsyncStorage.getItem("activate"));

    if (activationStatus != null) {
      setStatus(activationStatus);
      statusToPrint = `${status}`;
      return statusToPrint;
    } else {
      return statusToPrint;
    }
  }

  async function myRhythmFunction() {
    const rhythmFromAsyncStorage = JSON.parse(
      await AsyncStorage.getItem("rhythm")
    );

    // console.log(rhythmFromAsyncStorage)
    if (rhythm != null) {
      setRhythm(rhythmFromAsyncStorage);
      rhythmToPrint = `${rhythmFromAsyncStorage}`;
      return rhythmToPrint;
    } else {
      return rhythmToPrint;
    }
  }

  // edit

  async function myWeekdayFunction() {
    const weekdayFromAsyncStorage = JSON.parse(
      await AsyncStorage.getItem("rhythm")
    );

    if (weekday != null) {
      setRhythm(weekdayFromAsyncStorage);
      weekdayToPrint = `${weekdayFromAsyncStorage}`;
      return weekdayToPrint;
    } else {
      return weekdayToPrint;
    }
  }

  async function handleClear() {
    await AsyncStorage.clear();
  }

  /*
  useFocusEffect(() => {
    myStatusFunction();
    myRhythmFunction();
    myWeekdayFunction();
  });
  */

  useFocusEffect(() => {
    myStatusFunction();
    myRhythmFunction();
    myWeekdayFunction();
  }, []);

  


  /*
  useFocusEffect(
    React.useCallback(() => {
      myStatusFunction();
      myRhythmFunction();
      myWeekdayFunction();
    }, [status, rhythm, weekday])
  );
  */

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTitle} variant="headlineLarge">
          Current Settings
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Active: {statusToPrint}
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          Rhythm: {rhythmToPrint}
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          placeholder for day and time
        </Text>

        <Text style={styles.text} variant="headlineSmall">
          placeholder for reminder
        </Text>

        <Button
          mode="contained-tonal"
          style={{ margin: "5%" }}
          onPress={handleSettingsNavigation}
        >
          Edit
        </Button>

        <Button
          mode="contained-tonal"
          style={{ margin: "5%" }}
          onPress={() => handleClear()}
        >
          Clear
        </Button>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

/**
 * An object that defines CSS styles for the HomeScreen component.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1B1F",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  button: {
    marginTop: 16,
    backgroundColor: "#fff",
    color: "#1C1B1F",
  },
  text: {
    color: "#fff",
  },
  textTitle: {
    color: "#D0BCFF",
  },
});
