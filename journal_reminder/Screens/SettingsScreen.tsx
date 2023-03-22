import ReminderCard from "../Components/ReminderCard";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

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
    <View style={styles.container}>
      <Text variant="headlineLarge">Settings</Text>
      {/* <Button mode="contained-tonal"> Edit</Button> */}
      <StatusBar style="auto" />

      <DropDown
        list={options}
        placeholder="Select Options"
        value={selectedValue}
        setValue={setSelectedValue}
        visible={false}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1C1B1F",
    color: "#D0BCFF ",
    alignItems: "center",
    justifyContent: "center",
  },
});
