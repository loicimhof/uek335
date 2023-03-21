import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">Title</Text>
      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate("Settings")}
      >
        Go to settings page
      </Button>
      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate("Test")}
      >
        Go to test page
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
