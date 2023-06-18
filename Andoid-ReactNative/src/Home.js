import React from "react";
import {
  Button,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Dimension } from "./dimension";
import { NotchSize } from "./utils/NotchSize";

const Home = ({ navigation }) => {
  const notchHeight = NotchSize();

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginTop: notchHeight,
          }}>
          <Image
            source={{
              uri: "https://pbs.twimg.com/media/CnX1wcEXEAAOGcM.jpg",
            }}
            style={{ width: 355, height: 400 }}></Image>
          <Text style={{ padding: 5 }}>Hey! Welcome to GlobeChat</Text>
          <Text style={{ padding: 5, height: 190 }}>
            A place where you can contact with anyone without worrying about
            process like phone varifiactaion or email
          </Text>
          <Button
            onPress={() => {
              navigation.push("SignUp");
            }}
            title="Signup"></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
