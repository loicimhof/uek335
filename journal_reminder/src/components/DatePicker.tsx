import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import {
  DatePickerModal,
  en,
  registerTranslation,
} from "react-native-paper-dates";

registerTranslation("en", en);

export default function DatePicker() {
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const weekdays = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );


  return (
    <>
      <View style={{ margin: "5%" }}>
        <Button
          onPress={() => setOpen(true)}
          uppercase={false}
          mode="contained"
          style={{ borderRadius: 12 }}
        >
          Pick date
        </Button>

        <DatePickerModal
          locale="en"
          mode="single"
          date={date}
          visible={open}
          onConfirm={onConfirmSingle}
          onDismiss={onDismissSingle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 35,
    color: "#fff",
  },
  dayText: {
    fontSize: 20,
    color: "#fff",
  },
});
