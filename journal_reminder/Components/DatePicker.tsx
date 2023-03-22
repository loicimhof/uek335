import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  DatePickerModal,
  de,
  registerTranslation,
} from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

registerTranslation("de", de);

export default function DatePicker() {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  let offset = 0;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let result = null;

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
    console.log("blah blah blah");
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setOpen(false);
      setDate(params.date);
    },
    [setDate]
  );

  useEffect(() => {
    do {
      result = new Date(year, month, offset);

      offset--;
    } while (result.getDay() == 0 || result.getDay() == 6);

    setDate(result);
  }, []);

  const selectedDate = `${date
    .getDate()
    .toLocaleString("de-CH", {
      minimumIntegerDigits: 2,
    })}.${month.toLocaleString("de-CH", { minimumIntegerDigits: 2 })}.${year}`;

  return (
    <SafeAreaProvider style={{ maxHeight: 100 }}>
      <View>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.container}
        >
          <Text style={styles.dateText}>{selectedDate}</Text>
          <Text style={styles.dayText}>{weekdays[date.getDay()]}</Text>
        </TouchableOpacity>
        <DatePickerModal
          locale="de"
          mode="single"
          date={date}
          visible={open}
          onConfirm={onConfirmSingle}
          onDismiss={onDismissSingle}
        />
      </View>
    </SafeAreaProvider>
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
