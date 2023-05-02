import React, { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

import Header from "./Header";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        style={styles.inputField}
        placeholder="Enter your Unique UserName"
        onChangeText={(userName) => setUserName(userName)}
        defaultValue={userName}></TextInput>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your Country"
        onChangeText={(country) => setCountry(country)}
        defaultValue={country}></TextInput>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your gender"
        onChangeText={(gender) => setGender(gender)}
        defaultValue={gender}></TextInput>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your Age"
        onChangeText={(age) => setAge(age)}
        defaultValue={age}></TextInput>
      <Button
        onPress={() => {
          console.log("You tapped the button!");
        }}
        title="Submit"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
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
