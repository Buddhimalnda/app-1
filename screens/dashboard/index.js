import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./tabs/Home";
import Library from "./tabs/Library";
import Messege from "./tabs/Messege";
import Profile from "./tabs/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";

export default function index() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
          <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Icon type="material" name="home" />,
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: () => <Icon type="material" name="library-books" />,
          }}
        />
        {/* <Tab.Screen name="Library" component={Library} />
        <Tab.Screen
          name="Messege"
          component={Messege}
          options={{
            tabBarIcon: () => <Icon type="material" name="chat" />,
          }}
        />
        */}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Icon type="material" name="account-circle" />,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
