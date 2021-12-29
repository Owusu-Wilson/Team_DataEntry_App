import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { Dimensions,View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import auth from '@react-native-firebase/auth';
import {AuthContent} from '../components/AuthProvider';

const Routes = () =>{
    const {user, setUser} = useContext(AuthContent);
    const [initializing, setInitializing]
  
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    useEffect(()=>{
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);
  
    if (initializing) return null;
  
    return (
      <NavigationContainer>
        {user ? <AppStack/> : <AuthStack/>}
      </NavigationContainer>
    )
  }



export default  Routes;