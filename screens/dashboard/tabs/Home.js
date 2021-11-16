import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
// import {  } from "react-native-gesture-handler";
import SearchBar from "../../../components/blocks/searchbar";
import SatusBar from "../../../components/blocks/statusList";
import PostAdd from "../../../components/blocks/post/add";
import ClassOld from "../../../components/blocks/classes/home";
import Ads from "../../../components/blocks/ads/home";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1 }}>
          <SearchBar />
        </View>
        <SatusBar />
        <PostAdd />
        <ClassOld />
        <ClassOld />
        <Ads />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
