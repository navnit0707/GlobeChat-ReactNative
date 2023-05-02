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
      <View style={{ position: "absolute", right: 10, top: 10 }}>
        <Text style={{ color: "#fff", marginRight: 10 }}>Chat</Text>

        <Text style={{ color: "#fff" }}>Logout</Text>
      </View>
    </View>
  );
};

export default Header;
