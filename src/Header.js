import React from "react";
import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View style={{ backgroundColor: "#0c9", height: 50 }}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/40719341?v=4",
        }}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
        }}>
        GlobeChat
      </Text>
      <View
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Text style={{ color: "#fff", marginRight: 10 }}>Messages</Text>
      </View>
    </View>
  );
};

export default Header;
