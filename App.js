import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';


import OnboardingScreen from "./screens/OnboardingUI";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import RootStackScreen from './screens/RootStackScreen'
import JoinTeamScreen from './screens/JoinTeamScreen';
import CreateTeamScreen from './screens/CreateTeamScreen';
import ViewData from './screens/ViewDataScreen';



export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <RootStackScreen/> */}
        <MainNavigator.Navigator
          screenOptions={{ headerShown: true ,  }}
          // initialRouteName=""
        >
      <MainNavigator.Screen name="Onboarding" component={OnboardingScreen} />
      <MainNavigator.Screen name="Login" component={LoginScreen} />
      <MainNavigator.Screen name="Home" component={HomeScreen} />
      <MainNavigator.Screen name="SignUp" component={SignUpScreen} />
      <MainNavigator.Screen name="JoinTeam" component={JoinTeamScreen} />
      <MainNavigator.Screen name="CreateTeam" component={CreateTeamScreen} />
      <MainNavigator.Screen name="ViewData" component={ViewData} />
         
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "space-around",
  },
});
