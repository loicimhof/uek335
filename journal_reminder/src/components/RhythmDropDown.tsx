import { StyleSheet, View } from "react-native";

import React, { useEffect, useState } from "react";
import DropDown from "react-native-paper-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RhythmDropDown({ navigation }: any) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const options = [
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
  ];

  async function asyncStorageGet() {
    const myStorage = JSON.parse(await AsyncStorage.getItem("rhythm"));

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

  const onDropSelection = async () => {
    let workValue = await asyncStorageGet();
    setSelectedValue(workValue);
    AsyncStorage.setItem("rhythm", JSON.stringify(workValue));
    // console.log("selected value: " + selectedValue)
    setShowDropDown(false);
  };

  return (
    <>
      <View style={styles.container}>
        <DropDown
          list={options}
          placeholder="Select Rhythm"
          value={selectedValue}
          setValue={() => {
            onDropSelection();
            console.log(selectedValue);
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
    color: "#D0BCFF ",
    alignItems: "center",
    justifyContent: "center",
  },
});
