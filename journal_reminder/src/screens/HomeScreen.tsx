import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

/**
 * Diese Komponente stellt die Startseite der App dar.
 *
 * @param {object} navigation - Ein Objekt, das Funktionen zum Navigieren zwischen App-Bildschirmen bereitstellt.
 */
export default function HomeScreen({ navigation }: any) {
  const [status, setStatus] = useState(false);
  let statusToPrint = `${status}`;

  /**
   * Diese Funktion wird aufgerufen, wenn der Benutzer auf den "Edit" Button klickt.
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

  async function handleClear() {
    await AsyncStorage.clear();
  }

  useFocusEffect(() => {
    myStatusFunction();
  });

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
          placeholder for rhythm
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
 * Ein Objekt, das CSS-Styles für die HomeScreen-Komponente definiert.
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
