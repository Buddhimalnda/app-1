import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/blocks/mzj/header";
import Body from "../../../components/blocks/mzj/body";
import InputBox from "../../../components/blocks/mzj/inputBox";

export default function Messege() {
  return (
    <View>
      <Header />
      <Body />
      <InputBox />
    </View>
  );
}

const styles = StyleSheet.create({});
