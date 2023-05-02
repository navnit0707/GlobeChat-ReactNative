import React from "react";
import { Text, View, Image } from "react-native";

const CatApp = () => {
  return (
    <View style={{ paddingTop: 40, paddingLeft: 10, overflow: "visible" }}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/40719341?v=4",
        }}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
      <Text style={{}}>Hello , I am Navnit </Text>
    </View>
  );
};

export default CatApp;
