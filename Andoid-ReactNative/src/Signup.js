import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";

import Header from "./Header";
import { NotchSize } from "./utils/NotchSize";

const SignUp = ({ navigation }) => {
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const notchHeight = NotchSize();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ height: notchHeight }}></View>
        <Header />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your Unique UserName"
          onChangeText={(userName) => setUserName(userName)}
          defaultValue={userName}
          value={userName}></TextInput>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your Country"
          onChangeText={(country) => setCountry(country)}
          defaultValue={country}
          value={country}></TextInput>

        <TextInput
          style={styles.inputField}
          placeholder="Enter your gender"
          onChangeText={(gender) => setGender(gender)}
          defaultValue={gender}
          value={gender}></TextInput>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your Age"
          onChangeText={(age) => setAge(age)}
          keyboardType="numeric"
          defaultValue={age}
          value={age}></TextInput>
        <Button
          onPress={() => {
            navigation.push("ChatPage");
          }}
          title="Submit"></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 5,
  },
  inputField: {
    fontSize: 18,

    marginBottom: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default SignUp;
