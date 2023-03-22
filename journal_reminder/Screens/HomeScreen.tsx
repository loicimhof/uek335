import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Title, Text, FAB } from 'react-native-paper';

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
      <Text variant="headlineSmall">placeholder for rhythm</Text> 
      <Text variant="headlineSmall">placeholder for day and time</Text> 
      <Text variant="headlineSmall">placeholder for repetitions</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
