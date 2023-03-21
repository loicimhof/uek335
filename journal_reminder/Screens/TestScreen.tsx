import { Provider, Surface } from "react-native-paper";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import DropDown from "react-native-paper-dropdown";

export default function TestScreen() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState([]);

  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

  return (
    <Provider>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <DropDown
            label={"Gender"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={gender}
            setValue={setGender}
            list={genderList}
          />
        </SafeAreaView>
      </Surface>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
});
