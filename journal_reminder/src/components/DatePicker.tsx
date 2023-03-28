import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import {
  DatePickerModal,
  en,
  registerTranslation,
} from "react-native-paper-dates";

registerTranslation("en", en);

export default function DatePicker() {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);

  async function asyncStorageGetDate() {
    const dateStorage = await AsyncStorage.getItem("date");

    if (dateStorage) {
      return new Date(dateStorage);
    } else {
      return date;
    }
  }

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    async (params: any) => {
      let workValue: Date = params.date;
      setOpen(false);
      setDate(workValue);
      AsyncStorage.setItem("date", workValue.toString());
    },
    [setOpen, setDate]
  );

  useEffect(() => {
    asyncStorageGetDate().then((res) => {
      if (res) {
        setDate(res);
      }
    });
  }, []);

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
          onConfirm={onConfirm}
          onDismiss={onDismiss}
        />
      </View>
    </>
  );
}
