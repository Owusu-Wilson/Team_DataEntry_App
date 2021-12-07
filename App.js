import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import OnboardingScreen from "./screens/OnboardingUI";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: true ,  }}
          // initialRouteName=""
        >
      <MainNavigator.Screen name="Onboarding" component={OnboardingScreen} />
      <MainNavigator.Screen name="Login" component={LoginScreen} />
      <MainNavigator.Screen name="Home" component={HomeScreen} />
         
        </MainNavigator.Navigator>
      </NavigationContainer>
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
