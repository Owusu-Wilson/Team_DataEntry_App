import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
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
import AppStack from "./AppStack";

const getFonts = ()=> {
  return Font.loadAsync({
    'fredoka':require('./assets/fonts/FredokaOne-Regular.ttf'),
    'kufam-bold': require('./assets/fonts/Kufam-SemiBoldItalic.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    'lato-bolditalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
    'lato-italic': require('./assets/fonts/Lato-Italic.ttf'),
    'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
    'redex-pro': require('./assets/fonts/ReadexPro-VariableFont_wght.ttf'),

  })

}

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  const MainNavigator = createStackNavigator();
  if(!dataLoaded){
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish = {()=> setDataLoaded(true)}
      />
    );
  }
  <AppStack/>
  // return (
  //   <View style={{ flex: 1 }}>

      
  //   </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "space-around",
  },
});
