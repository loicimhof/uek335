import * as React from "react";
import { Text, Switch } from "react-native-paper";
import { View } from "react-native/Libraries/Components/View/View";

const Reminder = () => {
  const [isReminderOn, setIsReminderOn] = React.useState(false);

  const onToggleSwitch = () => setIsReminderOn(!isReminderOn);

  return (
      <Switch
        value={isReminderOn}
        onValueChange={onToggleSwitch}
        // style={{ borderWidth: 2, borderColor: "blue" }}
      />
  );
};

export default Reminder;
