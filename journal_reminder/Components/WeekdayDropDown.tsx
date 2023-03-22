import ReminderCard from "./ReminderCard";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Provider, Text } from "react-native-paper";

import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";

export default function WeekdayDropDown({ navigation }: any) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const weekdays = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
  ];

  const handleSelectedValueChange = (value: any, onSelectedValueChange: any) => {
    setSelectedValue(value);
    onSelectedValueChange(value);
  };

  return (
    <Provider>
    <View style={styles.container}>
      <DropDown
        list={weekdays}
        placeholder="Select Weekday"
        value={selectedValue}
        setValue={setSelectedValue}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        visible={showDropDown}
        dropDownStyle={{marginTop: "0%", marginLeft: "0%"}}
      />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#1C1B1F",
    color: "#D0BCFF ",
    alignItems: "center",
    justifyContent: "center",
  },
});
