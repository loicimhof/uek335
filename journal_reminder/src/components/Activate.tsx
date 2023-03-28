import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, Switch } from "react-native-paper";

const Activate = () => {
  const [isActivated, setIsActivated] = useState(false);

  async function asyncStorageGetStatus() {
    const activateStorage = JSON.parse(await AsyncStorage.getItem("activate"));

    if (activateStorage) {
      return activateStorage;
    } else {
      return isActivated;
    }
  }

  const onActivateToggle = async () => {
    let workValue = await asyncStorageGetStatus();
    workValue = !workValue;
    setIsActivated(workValue);
    AsyncStorage.setItem("activate", JSON.stringify(workValue));
  };

  useEffect(() => {
    asyncStorageGetStatus().then((res) => {
      if (res) {
        setIsActivated(res);
      }
    });
  }, []);

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#D0BCFF" }} variant="bodyLarge">
          Activate
        </Text>

        <Switch value={isActivated} onValueChange={() => onActivateToggle()} />
      </View>
    </>
  );
};

export default Activate;
