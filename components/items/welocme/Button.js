import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Button({ text }) {
  return (
    <View style={styles.btn}>
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 35,
    margin: 10,
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    padding: 5,
  },
  btnText: {
    color: "#eee",
    textAlign: "center",
    justifyContent: "center",
  },
});
