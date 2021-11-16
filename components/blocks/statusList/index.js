import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
export class Index extends Component {
  state = {
    status: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
    ],
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
            <View key={doc.id} style={{ marginHorizontal: 2 }}>
              <Avatar
                size="medium"
                rounded
                avatarStyle={{
                  borderWidth: 2,
                  borderColor: "#000",
                }}
                icon={{ name: "user", type: "font-awesome" }}
                onPress={() => console.log("Works!")}
                //   activeOpacity={0.7}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Index;
