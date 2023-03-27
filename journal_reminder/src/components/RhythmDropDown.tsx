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
          // dropDownItemStyle={styles.dropdown}
          // dropDownItemTextStyle={styles.dropdownItem}
          // // itemLabelStyle={styles.dropdownItemLabel}        
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
  // dropdown: {
  //   width: "100%",
  //   backgroundColor: "#1E1E1E",
  //   color: "#fff", // white text color
  // },
  // dropdownLabel: {
  //   color: "#fff", // white text color
  //   fontSize: 16,
  // },
  // dropdownItem: {
  //   justifyContent: "flex-start",
  //   paddingHorizontal: 10,
  //   paddingVertical: 8,
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  //   borderBottomColor: "#666", // a shade of gray
  // },
  // dropdownItemLabel: {
  //   color: "#fff", // white text color
  //   fontSize: 16,
  // },
});
