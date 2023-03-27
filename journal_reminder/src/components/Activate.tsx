import React, { useState } from "react";
import { View } from "react-native";
import { Text, Switch } from "react-native-paper";


/**
 * A component to toggle activation state.
 */
const Activate = () => {
  const [isActivateOn, setIsActivateOn] = useState(false);


    /**
   * Callback function to toggle activation state.
   */
  const onToggleSwitch = () => setIsActivateOn(!isActivateOn);

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

        <Switch value={isActivateOn} onValueChange={onToggleSwitch} />
      </View>
    </>
  );
};

export default Activate;
