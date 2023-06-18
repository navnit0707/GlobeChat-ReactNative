import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { NotchSize } from "./utils/NotchSize";

const ChatPage = ({ navigation }) => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  // Load messages from local storage on component mount
  useEffect(() => {
    loadMessages();
  }, []);

  // Save messages to local storage whenever messages change
  useEffect(() => {
    saveMessages();
  }, [messages]);

  const loadMessages = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem("chatMessages");
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.log("Error loading messages:", error);
    }
  };

  const saveMessages = async () => {
    try {
      await AsyncStorage.setItem("chatMessages", JSON.stringify(messages));
    } catch (error) {
      console.log("Error saving messages:", error);
    }
  };

  const handleSendMessage = () => {
    if (msg.trim() === "") return;
    const newMessage = { sender: "You", content: msg };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMsg("");
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <View
        key={index}
        style={[
          styles.messageContainer,
          message.sender === "You"
            ? styles.sentMessage
            : styles.receivedMessage,
        ]}>
        <Text style={styles.messageSender}>{message.sender}</Text>
        <Text style={styles.messageContent}>{message.content}</Text>
      </View>
    ));
  };
  const notchHeight = NotchSize();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: notchHeight }}>
      <View style={styles.header}>
        <Text style={styles.name}>Predefault Navnit</Text>
        <Image style={styles.messageIcon} />
      </View>
      <ScrollView>
        <View style={styles.body}>{renderMessages()}</View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.container}>
          <Text style={styles.icon}>📁</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Type your message....."
            onChangeText={(msg) => setMsg(msg)}
            value={msg}
          />
          <Button
            style={styles.sendButton}
            title="Send"
            onPress={handleSendMessage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: 50,
    backgroundColor: "lightgray",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  messageIcon: {
    width: 24,
    height: 24,
  },
  body: {
    flex: 1,
    height: "60%",
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#",
  },

  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E4E4E4",
  },
  messageSender: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageContent: {},
  footer: {
    height: 100,
    backgroundColor: "lightgray",
    borderTopWidth: 1,
    borderTopColor: "gray",
    paddingHorizontal: 10,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  icon: {
    flex: 2,
    justifyContent: "center",
    fontSize: 30,
    textAlign: "center",
  },
  inputField: {
    flex: 6,
    fontSize: 18,
    marginBottom: 5,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  sendButton: {
    flex: 2,
    justifyContent: "center",
  },
});

export default ChatPage;
