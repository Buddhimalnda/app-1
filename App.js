import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import DashBoard from "./screens/dashboard/index";
import Wellcome from "./screens/wellcome";

import { Asset } from "expo-asset";

import { Icon } from "react-native-elements";
import AppLoading from "expo-app-loading";

import { auth } from "./firebase";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

class App extends React.Component {
  state = {
    isReady: false,
    user: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./assets/bg.jpg")]);

    await Promise.all([...imageAssets]);
  }

  render() {
    const Stack = createStackNavigator();
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    if (this.state.user) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{
                headerRight: () => (
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Icon
                      containerStyle={styles.icon}
                      type="material"
                      name="qr-code-scanner"
                    />
                    <Icon
                      containerStyle={styles.icon}
                      type="material"
                      name="event"
                    />
                    <Icon
                      containerStyle={styles.icon}
                      type="material"
                      name="notifications"
                    />
                  </View>
                ),
                headerLeft: () => (
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontStyle: "italic", fontWeight: "600" }}>
                      APP NAME
                    </Text>
                  </View>
                ),
                title: false,
              }}
              component={DashBoard}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Wellcome"
              options={{
                headerShown: false,
              }}
              component={Wellcome}
            />
            <Stack.Screen
              name="Home"
              options={{
                headerRight: () => (
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Icon
                      containerStyle={styles.icon}
                      type="material"
                      name="qr-code-scanner"
                    />
                    <Icon
                      containerStyle={styles.icon}
                      type="material"
                      name="event"
                    />
                    <Icon
                      containerStyle={styles.icon}
                      type="material"
                      name="notifications"
                    />
                  </View>
                ),
                headerLeft: () => (
                  <View>
                    <Text>APP NAME</Text>
                  </View>
                ),
              }}
              component={DashBoard}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const UserIn = ({ Stack }) => {
  return (
    <>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={DashBoard}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default App;

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <StatusBar style="auto" />
//       </View>
//     </NavigationContainer>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{
//             title: "My home",
//             headerStyle: {
//               backgroundColor: "#f4511e",
//             },
//             headerTintColor: "#fff",
//             headerTitleStyle: {
//               fontWeight: "bold",
//             },
//             headerRight: () => (
//               <Button
//                 onPress={() => alert("This is a button!")}
//                 title="Info"
//                 color="#f4511e"
//               />
//             ),
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }
