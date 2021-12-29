/*
* Holds all the screens rendered as part of the drawer navigator
*/
import React from "react";
import { View, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

import Home from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import AboutScreen from "./AboutScreen";
import AdminScreen from "./admin/AdminScreen";
import { DrawerContent } from "./DrawerContent";


const Drawer = createDrawerNavigator();

export default function CustomDrawerNavigator() {
  return (
    
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Admin" component={AdminScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    
  );
}
