import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
// import { createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import SettingScreen from './SettingScreen';
// const Drawer = createDrawerNavigator();

export default function SignUpScreen() {
  return (

    <View style={styles.container}>
      {/* <Text>Sign Up Screen</Text> */}
      <Text>Sorry, accounts cannot be created at this time.</Text>
      <Text>Try again another time. Thank you.</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
