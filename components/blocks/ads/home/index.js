import React, { Component } from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";
import { Avatar } from "react-native-elements";

const { height, width } = Dimensions.get("window");
export class Index extends Component {
  state = {
    status: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };

  render() {
    const { status } = this.state;
    return (
      <View
        style={{
          flex: 1,
          marginVertical: 10,
          marginBottom: 10,
          marginHorizontal: 18,
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {status.map((doc) => (
            <View
              key={doc.id}
              style={{
                height: height / 3 - 30,
                width: width - 60,
                marginHorizontal: 10,
                backgroundColor: "white",
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Ads</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Index;
