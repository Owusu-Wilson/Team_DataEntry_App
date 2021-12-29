//IMPORTS FROM PACKAES AND LIBRARIES
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen';
import { Component } from 'react';
import { WebView } from 'react-native';

import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
import AboutScreen from './AboutScreen'
import ExploreScreen from "./ExploreScreen";
// VARIABLES
const topImg = require("../images/dashboard.jpg")

// DEFINING THE BUTTOM NAVIGATOR
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="DashBoard"
      activeColor="#fff"
    >
      <Tab.Screen
        name="DashBoard"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={AboutScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>
);



export default function Home({ navigation }) {
  return (
    // <ScrollView>
    <View
    style={styles.container}
    >
<Tab.Navigator
      initialRouteName="DashBoard"
      activeColor="#fff"
    >
      <Tab.Screen
        name="DashBoard"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={AboutScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>
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
      <View style={styles.footer}>
      </View>
      </View>
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
  lists:{
    color: 'cyan'
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

    
  },
  footer:{
    flex: 8,
    backgroundColor: 'black'

  }

  });
