import { StyleSheet, View } from "react-native";

import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";

export default function RhythmDropDown({ navigation }: any) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const options = [
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
  ];

  return (
    <>
      <View style={styles.container}>
        <DropDown
          list={options}
          placeholder="Select Rhythm"
          value={selectedValue}
          setValue={setSelectedValue}
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
