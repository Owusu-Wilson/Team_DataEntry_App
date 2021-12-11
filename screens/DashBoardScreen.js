//import { Navigation } from "react-navigation";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
  ImageBackground,
} from "react-native";

import {dashes } from "../data/dashes";
import { Card } from "../components/Card";

const topImg = require("../images/dashboard.jpg")

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={{}}>
      <Image
            style={styles.top_image}
            source={topImg}
          />
      </View>

      <FlatList
      style={styles.lists}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={dashes}
        renderItem={({ item }) => <Card item_={item} />}
      />
    </SafeAreaView>
  );
}

const colors = {
  'cyan': '#a6e4d0',
  'yellow': '#fdeb93',
  'light-pink': '#e9bcbe'
}

const styles = StyleSheet.create({
  container:{ flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    
  },

  top_image: {
    marginTop:10,
    marginBottom:80,
    height:250,
    backgroundColor: colors['yellow'],
    marginBottom:0,
    width:'auto'
  },

  });
