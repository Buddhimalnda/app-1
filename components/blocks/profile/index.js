import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Avatar, Icon } from "react-native-elements";

const { height } = Dimensions.get("window");

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={{ margin: 30 }}>
          <Avatar
            size="large"
            rounded
            avatarStyle={{
              borderWidth: 2,
              borderColor: "#000",
            }}
            icon={{ name: "user", type: "font-awesome" }}
            onPress={() => console.log("Works!")}
            //   activeOpacity={0.7}
          />
          <View>
            <Text>Name of owner</Text>
            <Text>Email of owner</Text>
            <Text>Tno of owner</Text>
            <Text>Id of owner</Text>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>Class name</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Icon type="material" name="keyboard-arrow-up" />
                  <Icon type="material" name="keyboard-arrow-down" />
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>Class name</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Icon type="material" name="keyboard-arrow-up" />
                  <Icon type="material" name="keyboard-arrow-down" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "black",
          }}
        >
          <View>
            <Text>LINK</Text>
          </View>
          <View>
            <Text>LINK</Text>
          </View>
          <View>
            <Text>LINK</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default index;
