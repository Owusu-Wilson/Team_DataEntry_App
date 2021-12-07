import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import SettingScreen from './SettingScreen';
const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SettingScreen">

        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}