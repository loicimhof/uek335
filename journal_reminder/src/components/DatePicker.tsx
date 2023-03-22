import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import {
  DatePickerModal,
  en,
  registerTranslation,
} from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

registerTranslation("en", en);

export default function DatePicker() {
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  /*  let offset = 0;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let result = null;
*/

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

  /*
  useEffect(() => {
    do {
      result = new Date(year, month, offset);

      offset--;
    } while (result.getDay() == 0 || result.getDay() == 6);

    setDate(result);
  }, []);

  const selectedDate = `${date.getDate().toLocaleString("de-CH", {
    minimumIntegerDigits: 2,
  })}.${month.toLocaleString("de-CH", { minimumIntegerDigits: 2 })}.${year}`;
  */

  return (
    <>
      <View style={{ margin: "5%" }}>
        {/* 
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.container}
        >
          <Text style={styles.dateText}>{selectedDate}</Text>
          <Text style={styles.dayText}>{weekdays[date.getDay()]}</Text>
        </TouchableOpacity>
        */}
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
          Pick single date
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
