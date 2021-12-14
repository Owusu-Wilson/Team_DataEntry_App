//IMPORTS FROM PACKAES AND LIBRARIES
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen';
import { Component } from 'react';
import { WebView } from 'react-native';


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
  ScrollView,
  Button
  
} from "react-native";

// LOCAL IMPORTS FROM PROJECT FILES
import {dashes } from "../data/dashes";
import { Card } from "../components/Card";
import MainTabScreen from "./MainTabScreen";

// VARIABLES
const topImg = require("../images/dashboard.jpg")

export default function Home({ navigation }) {
  return (
    // <ScrollView>
    <SafeAreaView
    style={styles.container}
    >

        <View style={{}}>
          <Image
            style={styles.top_image}
            source={topImg} />
        </View>

        <Text style={styles.caption}></Text>
        {/* //SELECT TO START */}

        <FlatList
          style={styles.lists}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}

          numColumns={1}
          data={dashes}
          renderItem={({ item }) => <Card item_={item} />} />
      </SafeAreaView>
      // </ScrollView>
  );
}

const colors = {
  'cyan': '#a6e4d0',
  'yellow': '#fdeb93',
  'light-pink': '#e9bcbe'
}

const styles = StyleSheet.create({
  container:{ flex: 1,
    paddingHorizontal: 0,
    backgroundColor: 'white',
    
  },

  top_image: {
    marginTop:10,
    marginBottom:80,
    height:200,
    backgroundColor: colors['yellow'],
    marginBottom:0,
    width:'auto',
    borderRadius:0,
  },
  caption:{
    fontSize:10,

    fontWeight:'bold',
    marginTop:10,
    letterSpacing:1.5,
    color: 'orange',
    shadowColor: 'gray',
    textShadowColor: 'gray',
    shadowOpacity: 1

    
  }

  });
