import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

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
      <Text variant="headlineLarge">Title</Text>
      <Button
        mode="contained-tonal"
        onPress={handleSettingsNavigation}
      >
        Go to settings page
      </Button>
      <Button
        mode="contained-tonal"
        onPress={handleTestNavigation}
      >
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
