import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Icon } from "react-native-elements";

const image = require("../assets/background-image.png");

const Start = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    appTitle: {
      top: 100,
      height: "50%",
      fontSize: 45,
      fontWeight: 600,
      fontWeight: "bold",
      textAlign: "center",
      color: "#FFFFFF",
    },
    box1: {
      width: "88%",
      height: 290,
      marginRight: "auto",
      marginLeft: "auto",
      backgroundColor: "white",
    },
    yourContainer: {
      flexDirection: "row",
      position: "relative",
      marginTop: 20,
      marginRight: "auto",
      marginLeft: "auto",
      width: "88%",
      borderColor: "#757083",
      borderWidth: 2,
      borderRadius: 3,
      padding: 10,
    },
    yourIcon: {
      fontSize: 10,
      paddingRight: 5,
      color: "#757083",
      opacity: 0.2,
    },
    yourName: {
      fontSize: 16,
      width: "100%",
      fontWeight: "300",
      opacity: 50,
      color: "#757083",
    },
    backgroundColorContainer: {
      flexDirection: "column",
    },
    backgroundColorText: {
      marginTop: 30,
      marginLeft: 25,
      fontSize: 16,
      fontWeight: "500",
      color: "#757083",
    },
    chatButtonColor: {
      margin: 10,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    chatButton1: {
      backgroundColor: "#090C08",
      width: 50,
      height: 50,
      borderRadius: 100 / 2,
    },
    chatButton2: {
      backgroundColor: "#474056",
      width: 50,
      height: 50,
      borderRadius: 100 / 2,
    },
    chatButton3: {
      backgroundColor: "#8A95A5",
      width: 50,
      height: 50,
      borderRadius: 100 / 2,
    },
    chatButton4: {
      backgroundColor: "#B9C6AE",
      width: 50,
      height: 50,
      borderRadius: 100 / 2,
    },
    chatStartButton: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "600",
      backgroundColor: "#757083",
      width: "88%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: 15,
      width: 200,
    },
    chatStartButtonText: {
      color: "#FFFFFF",
      fontWeight: "600",
      fontSize: 16,
      textAlign: "center",
    },
  });

  const [text, setText] = useState("");
  const [backColor, setBackColor] = useState("#fff");

  const onPressChat = (text, backColor) => {
    if (text === "") {
      return Alert.alert("Enter Name to Continue.");
    }
    navigation.navigate("Chat", {
      name: `${text}`,
      backColor: `${backColor}`,
    });
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.appTitle}>LetsChat</Text>
        <View style={styles.box1}>
          <View style={styles.yourContainer}>
            <Icon
              style={styles.yourIcon}
              name="person-outline"
              color="#000"
              size={25}
            />
            <TextInput
              style={styles.yourName}
              placeholder="Your Name"
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            />
          </View>
          <View style={styles.backgroundColorContainer}>
            <Text style={styles.backgroundColorText}>
              Choose Background Color:
            </Text>
            <View style={styles.chatButtonColor}>
              <TouchableOpacity
                onPress={() => setBackColor("#090C08")}
                style={styles.chatButton1}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBackColor("#474056")}
                style={styles.chatButton2}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBackColor("#8A95A5")}
                style={styles.chatButton3}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBackColor("#B9C6AE")}
                style={styles.chatButton4}
              ></TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.chatStartButton}
            onPress={() => onPressChat(text, backColor)}
          >
            <Text style={styles.chatStartButtonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Start;
