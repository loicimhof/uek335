import React, { useState } from "react";
import { View } from "react-native";
import { Text, Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Reminder = () => {
  const [isReminderOn, setIsReminderOn] = useState(false);

  const onToggleSwitch = () => setIsReminderOn(!isReminderOn);

  async function test() {
    await AsyncStorage.setItem("testnumber", "1");

    const response = await AsyncStorage.getItem("testnumber");
    console.log(response);
  }

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#ffffff" }} variant="bodyLarge">
          Reminder
        </Text>

        <Switch
          value={isReminderOn}
          onValueChange={() => {
            onToggleSwitch;
            test();
          }}
        />
      </View>
    </>
  );
};

export default Reminder;
