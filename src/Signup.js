import React, { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

const SignUp = () => {
  const [UserName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your Unique UserName"
        onChangeText={(UserName) => setUserName(UserName)}
        defaultValue={UserName}></TextInput>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your Country"></TextInput>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your gender"></TextInput>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your Age"></TextInput>
      <Button title="Submit"></Button>
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
