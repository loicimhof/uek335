import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Title, Text, FAB } from "react-native-paper";

/**
 * Diese Komponente stellt die Startseite der App dar.
 *
 * @param {object} navigation - Ein Objekt, das Funktionen zum Navigieren zwischen App-Bildschirmen bereitstellt.
 */
export default function HomeScreen({ navigation }: any) {
  /**
   * Diese Funktion wird aufgerufen, wenn der Benutzer auf den "Go to settings page" Button klickt.
   */
  const handleSettingsNavigation = () => {
    navigation.navigate("Settings");
  };

  /**
   * Diese Funktion wird aufgerufen, wenn der Benutzer auf den "Go to test page" Button klickt.
   */
  const handleTestNavigation = () => {
    navigation.navigate("Test");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} variant="headlineLarge">
        Title
      </Text>
      <Text style={styles.text} variant="headlineSmall">
        placeholder for rhythm
      </Text>
      <Text style={styles.text} variant="headlineSmall">
        placeholder for day and time
      </Text>
      <Text style={styles.text} variant="headlineSmall">
        placeholder for repetitions
      </Text>
      <Button mode="contained-tonal" onPress={handleSettingsNavigation}>
        Go to settings page
      </Button>
      <Button mode="contained-tonal" onPress={handleTestNavigation}>
        Go to test page
      </Button>
      <StatusBar style="auto" />
    </View>
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
});
