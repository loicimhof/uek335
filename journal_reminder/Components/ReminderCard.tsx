import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Reminder from '../Components/Reminder';


export default function SettingsScreen() {
  return (
   <View style={styles.container}>
      <Text variant="titleLarge">Reminder</Text>
      <Reminder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'green',
  },
});
