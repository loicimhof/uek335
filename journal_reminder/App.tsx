import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import TestScreen from "./Screens/TestScreen";
import { DefaultTheme, Provider } from "react-native-paper";
const dark = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4F378B",
    secondary: "#D0BCFF",
  },
};
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider theme={dark}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
