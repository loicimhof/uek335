import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

/**
 * This component represents the home page of the app.
 *
 * @param {object} navigation - An object that provides functions for navigating between app screens.
 */
export default function HomeScreen({ navigation }: any) {
  /**
   * This function is called when the user clicks on the "Go to settings page" button.
   */
  const handleSettingsNavigation = () => {
    navigation.navigate("Settings");
  };

  /**
   * This function is called when the user clicks on the "Go to test page" button.
   */
  const handleTestNavigation = () => {
    navigation.navigate("Test");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTitle} variant="headlineLarge">
          Current Settings
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

        <Button
          mode="contained-tonal"
          style={{ margin: "5%" }}
          onPress={handleSettingsNavigation}
        >
          Go to settings page
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
