import * as React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from "@expo/vector-icons";


const OnboardingScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            {/* onboarding screen */}
        <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="weibo-circle" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Get Started</Text>
      </TouchableOpacity>
        </View>
        )
        }


export default OnboardingScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'

    }
})