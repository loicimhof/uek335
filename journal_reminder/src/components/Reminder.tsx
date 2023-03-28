import { StyleSheet, View } from "react-native";

import React, { useEffect, useState } from "react";
import DropDown from "react-native-paper-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ReminderDropdown({ navigation }: any) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState([0]);

  const remindercount = [
    { label: "none", value: 0 },
    { label: "one", value: 1 },
    { label: "two", value: 2 },
    { label: "three", value: 3 },
    { label: "four", value: 4 },
    { label: "five", value: 5 },
  ];

  async function asyncStorageGet() {
    const myStorage = JSON.parse(await AsyncStorage.getItem("remindercount"));

    if (myStorage) {
      return myStorage;
    } else {
      return selectedValue;
    }
  }

  useEffect(() => {
    asyncStorageGet().then((res) => {
      if (res != null) {
        setSelectedValue(res);
      }
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <DropDown
          list={remindercount}
          placeholder="Count of reminders"
          value={selectedValue}
          setValue={(selectedValue) => {
            setSelectedValue(selectedValue);
            AsyncStorage.setItem(
              "remindercount",
              JSON.stringify(selectedValue)
            );
            setShowDropDown(false);
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
