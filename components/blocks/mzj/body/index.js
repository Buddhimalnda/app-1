import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import Mzj from "./Mzj";
const { width, height } = Dimensions.get("window");
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [
        { id: 1, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 2, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: true },
        { id: 3, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 4, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: true },
        { id: 5, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 6, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 7, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: true },
        { id: 8, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 9, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 10, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 11, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: false },
        { id: 12, data: { mzj: "losccjvvnjd", time: "10:05 AM" }, in: true },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView
        style={{
          marginHorizontal: 18,
          marginTop: 10,
          height: height - height / 3,
        }}
      >
        <ScrollView style={{}}>
          {this.state.status.map((doc) => (
            <Mzj data={doc.data} in={doc.in} key={doc.id} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default index;
