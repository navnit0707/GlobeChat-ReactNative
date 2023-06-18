import React, { useState, useEffect } from "react";
import { SafeAreaView, Platform, StatusBar, Dimensions } from "react-native";

export const NotchSize = () => {
  const [notchHeight, setNotchHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS === "android") {
      // On Android, the notch height can be retrieved using the StatusBar.currentHeight property
      const statusBarHeight = StatusBar.currentHeight || 0;
      const screenHeight = Dimensions.get("screen").height;
      const windowHeight = Dimensions.get("window").height;
      const notchHeight = screenHeight - windowHeight - statusBarHeight;
      setNotchHeight(notchHeight);
    } else if (Platform.OS === "ios") {
      // On iOS, the safe area insets can be retrieved using the SafeAreaView component
      const onLayout = (event) => {
        const { safeAreaInsets } = event.nativeEvent;
        setNotchHeight(safeAreaInsets.top);
      };
      SafeAreaView.addEventListener("onLayout", onLayout);
      return () => SafeAreaView.removeEventListener("onLayout", onLayout);
    }
  }, []);

  return notchHeight;
};
