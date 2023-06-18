import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import SignUp from "./src/Signup";
import { Dimension } from "./src/dimension";
import ChatPage from "./src/ChatPage";

const Stack = createNativeStackNavigator();

const ChatApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Globe Chat" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChatApp;
