import React from "react";
import { Button, Alert } from "react-native";

const SimpleButton = () => (
  <Button
    title='Do something'
    onPress={() => {
      Alert.alert("Clicked", "Hoy!", [{ text: "Done" }]);
    }}
  ></Button>
);

export default SimpleButton;
