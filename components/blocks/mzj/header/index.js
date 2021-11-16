import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Avatar, Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

class Index extends Component {
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
          alignItems: "center",
          marginTop: 10,
          justifyContent: "space-between",
          marginHorizontal: 18,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            size="medium"
            rounded
            avatarStyle={{
              borderWidth: 2,
              borderColor: "#000",
              borderStyle: "solid",
            }}
            icon={{ name: "user", type: "font-awesome" }}
            onPress={() => console.log("Works!")}
            //   activeOpacity={0.7}
          />
          <View style={{ marginHorizontal: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Name</Text>
            <Text>Last seen</Text>
          </View>
        </View>
        <View>
          <Icon type="material" name="menu" />
        </View>
      </View>
    );
  }
}

export default Index;
