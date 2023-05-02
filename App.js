import React from "react";
import { View } from "react-native";

import Header from "./src/Header";
import SignUp from "./src/Signup";
const CatApp = () => {
  return (
    <View
      style={{
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 10,
        overflow: "visible",
      }}>
      <Header />
      <SignUp />
    </View>
  );
};

export default CatApp;
