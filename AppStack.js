import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { AppState, StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


import OnboardingScreen from "./screens/OnboardingUI";
import LoginScreen from "./screens/LoginScreen";
import CustomDrawerNavigator from './screens/CustomDrawerNavigator'
import SignUpScreen from "./screens/SignUpScreen";

import JoinTeamScreen from './screens/JoinTeamScreen';
import CreateTeamScreen from './screens/CreateTeamScreen';
import ViewData from './screens/ViewDataScreen';

import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from "./screens/AboutScreen";
import AdminScreen from "./screens/admin/AdminScreen";

const AppStack = () =>{
    return (
        <NavigationContainer>
        {/* <RootStackScreen/> */}
        <MainNavigator.Navigator
          screenOptions={{ headerShown: true ,  }}
          // initialRouteName=""
        >
      <MainNavigator.Screen name="Onboarding" component={OnboardingScreen} />
      <MainNavigator.Screen name="Login" component={LoginScreen} />
      <MainNavigator.Screen name="Main" component={CustomDrawerNavigator} options={{headerShown: false}} />
      <MainNavigator.Screen name="SignUp" component={SignUpScreen} />
      <MainNavigator.Screen name="JoinTeam" component={JoinTeamScreen} />
      <MainNavigator.Screen name="CreateTeam" component={CreateTeamScreen} />
      <MainNavigator.Screen name="ViewData" component={ViewData} />

      {/* Including the Screens for the Drawer navigator */}
      <MainNavigator.Screen name="Profile" component={ProfileScreen} />
      <MainNavigator.Screen name="Settings" component={SettingsScreen} />
      <MainNavigator.Screen name="Admin" component={AdminScreen} />
      <MainNavigator.Screen name="About" component={AboutScreen} />
         
        </MainNavigator.Navigator>
      </NavigationContainer>
    )
};


export default AppStack;