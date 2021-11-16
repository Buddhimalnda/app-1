import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Mzj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props.in,
      data: props.data,
    };
  }

  render() {
    const data = this.state.data;
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: this.state.props ? "flex-end" : "flex-start",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            maxWidth: 200,
            padding: 10,
            margin: 5,
            borderRadius: 35,
          }}
        >
          <Text>{data.mzj}</Text>
        </View>
        <Text
          style={{
            fontSize: 10,
            marginTop: 10,
            position: "absolute",
            bottom: 0,
            padding: 10,
            ...(this.state.props ? styles.left : styles.right),
          }}
        >
          {data.time}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
});

export default Mzj;
