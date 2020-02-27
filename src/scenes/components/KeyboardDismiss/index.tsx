import React from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

const DismissKeyboard = ({ children }) => {
  return Platform.OS !== "web" ? (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  ) : (
    <div>{children}</div>
  );
};

export default DismissKeyboard;
