import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";

export default function TimePicker() {
  const [visible, setVisible] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    async ({ hours, minutes }) => {
      const workValue = { hours: hours, minutes: minutes };
      setVisible(false);
      AsyncStorage.setItem("time", JSON.stringify(workValue));
    },
    [setVisible]
  );

  return (
    <>
      <View style={{ margin: "5%" }}>
        <Button
          onPress={() => setVisible(true)}
          uppercase={false}
          mode="contained"
          style={{ borderRadius: 12 }}
        >
          Pick time
        </Button>

        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={12}
          minutes={14}
        />
      </View>
    </>
  );
}
