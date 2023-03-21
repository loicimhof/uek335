import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Title, Text } from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function SettingsScreen() {
  const Stack = createNativeStackNavigator();

  return (
   <View style={styles.container}>
      <Text variant="headlineLarge">Settings</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button mode='contained-tonal'> Edit</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
