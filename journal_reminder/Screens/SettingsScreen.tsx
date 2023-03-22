import ReminderCard from "../Components/ReminderCard";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Provider, Text } from "react-native-paper";

import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";

export default function SettingsScreen({ navigation }: any) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const options = [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
  ];


  return (
    <Provider>
    <View style={styles.container}>
      <Text style={styles.text} variant="headlineLarge">Settings</Text>
      {/* <Button mode="contained-tonal"> Edit</Button> */}
      <StatusBar style="auto" />

      <DropDown
        list={options}
        placeholder="Select Options"
        value={selectedValue}
        setValue={setSelectedValue}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        visible={showDropDown}
      />
      
      <ReminderCard />
      <Button
        style={{ backgroundColor: "#00ff69" }}
        mode="contained-tonal"
        onPress={() => navigation.navigate("Home")}
      >
        {" "}
        save
      </Button>
      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate("Home")}
      >
        {" "}
        cancel
      </Button>
    </View>
    </Provider>
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