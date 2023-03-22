import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Title, Text, FAB } from 'react-native-paper';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
  <Text style={styles.text} variant="headlineLarge">Title</Text>
  <Text style={styles.text} variant="headlineSmall">placeholder for rhythm</Text> 
  <Text style={styles.text} variant="headlineSmall">placeholder for day and time</Text> 
  <Text style={styles.text} variant="headlineSmall">placeholder for repetitions</Text> 
  <StatusBar style="auto" />
  <Button
    style={styles.button}
    mode="contained-tonal"
    onPress={() => navigation.navigate("Settings")}
  >
    Go to settings page
  </Button>
  <Button
    style={styles.button}
    mode="contained-tonal"
    onPress={() => navigation.navigate("Test")}
  >
    Go to test page
  </Button>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1B1F',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#fff',
    color: '#1C1B1F',
  },
  text: {
    color: '#fff',
  },
});


