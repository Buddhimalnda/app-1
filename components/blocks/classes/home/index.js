import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Avatar, Badge } from "react-native-elements";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  }

  render() {
    const { status } = this.state;
    return (
      <View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text>Title</Text>
        </View>
        <View
          style={{
            marginHorizontal: 18,
            marginVertical: 10,
            backgroundColor: "white",
            borderRadius: 35,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <ScrollView scrollEventThrottle={3}>
            {status.map((doc) => (
              <View key={doc.id}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomColor: "#000",
                    paddingBottom: 10,
                    borderBottomWidth: doc.id == 3 ? 0 : 1,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
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
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 10,

                      justifyContent: "center",
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        Class Teacher
                      </Text>
                      <Text>lesson</Text>
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        {status.map((doc) => (
                          <View style={{ marginRight: -7 }} key={doc.id}>
                            <Avatar
                              key={doc.id}
                              size={20}
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
                      </View>
                    </View>
                    <View style={{ marginLeft: "30%" }}>
                      <Text>time</Text>
                      <Badge value="99+" status="error" />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Index;
