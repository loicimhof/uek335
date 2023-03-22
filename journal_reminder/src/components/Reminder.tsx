import React, { useState } from "react";
import { View } from "react-native";
import { Text, Switch } from "react-native-paper";

const Reminder = () => {
  const [isReminderOn, setIsReminderOn] = useState(false);

  const onToggleSwitch = () => setIsReminderOn(!isReminderOn);

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

        <Switch value={isReminderOn} onValueChange={onToggleSwitch} />
      </View>
    </>
  );
};

export default Reminder;
