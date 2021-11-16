import React, { Component } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 18,
          justifyContent: "space-between",
          padding: 10,
          zIndex: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderRadius: 35,
            borderWidth: 1,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginRight: 0,
            width: 275,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginLeft: 5,
            }}
          >
            <Icon type="material" name="sentiment-satisfied-alt" />
            <TextInput placeholder="txt me" style={{ marginHorizontal: 5 }} />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 5,
            }}
          >
            <Icon type="material" name="attach-file" />
            <Icon type="material" name="photo-camera" />
          </View>
        </View>
        <Icon
          type="material"
          name="mic"
          style={{
            borderRadius: 100,
            backgroundColor: "green",
            padding: 5,
            marginLeft: 2.5,
          }}
          iconStyle={{ color: "white" }}
        />
      </View>
    );
  }
}

export default index;
