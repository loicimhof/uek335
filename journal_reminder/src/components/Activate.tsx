import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, Switch } from "react-native-paper";


/**
 * A component to toggle activation state.
 */
const Activate = () => {
  const [isActivateOn, setIsActivateOn] = useState(false);

  async function asyncStorageGet() {
    const myStorage = JSON.parse(await AsyncStorage.getItem("activate"));

    if (myStorage) {
      return myStorage;
    } else {
      return isActivateOn;
    }
  }

  useEffect(() => {
    asyncStorageGet().then((res) => {
      if (res != null) {
        setIsActivateOn(res);
      }
    });
  }, []);

  const onActivateToggle = async () => {
    let workValue = await asyncStorageGet();
    workValue = !workValue;
    setIsActivateOn(workValue);
    AsyncStorage.setItem("activate", JSON.stringify(workValue));
  };

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

        <Switch value={isActivateOn} onValueChange={() => onActivateToggle()} />
      </View>
    </>
  );
};

export default Activate;
