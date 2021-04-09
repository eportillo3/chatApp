import React from "react";
import { StyleSheet, View } from "react-native";

const Chat = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `${props.route.params.backColor}`,
    },
  });

  return <View style={styles.container}></View>;
};

export default Chat;
