import { StyleSheet, View } from "react-native";

import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WeekdayDropDown({ navigation }: any) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const weekdays = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
  ];

  const handleSelectedValueChange = (
    value: any,
    onSelectedValueChange: any
  ) => {
    setSelectedValue(value);
    onSelectedValueChange(value);
  };

  return (
    <>
      <View style={styles.container}>
        <DropDown
          list={weekdays}
          placeholder="Select Weekday"
          value={selectedValue}
          setValue={(selectedValue) => {
            setSelectedValue(selectedValue);
            AsyncStorage.setItem("weekday", JSON.stringify(selectedValue));
            setShowDropDown(false)
          }}          
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          visible={showDropDown}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#D0BCFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
