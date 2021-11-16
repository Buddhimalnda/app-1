import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
// import {  } from "react-native-gesture-handler";

export class index extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginHorizontal: 20,
          backgroundColor: "white",
          borderRadius: 33,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              flex: 0.15,
              justifyContent: "center",
              alignContent: "center",
              marginLeft: 20,
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
          </View>
          <View
            style={{
              flex: 0.85,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View>
              <TextInput
                placeholder="enter Your mind..."
                style={{
                  borderRadius: 35,
                  borderColor: "#000",
                  borderWidth: 1,
                  padding: 5,
                  marginHorizontal: 10,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View style={{ marginHorizontal: 30 }}>
            <Icon type="material" name="collections" />
          </View>
          <View style={{ marginHorizontal: 30 }}>
            <Icon type="material" name="photo-camera" />
          </View>
          <View style={{ marginHorizontal: 30 }}>
            <Icon type="material" name="mic" />
          </View>
        </View>
      </View>
    );
  }
}

export default index;
