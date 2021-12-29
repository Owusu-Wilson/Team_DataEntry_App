import React, { useState, useContext, useEffect } from "react";
import { Dimensions,View, Text, Image, TextInput, TouchableOpacity,Platform
 } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import SocialButton from '../components/SocialButton';



// DEFINING VARIABLES
const screen_width = Dimensions.get('window').width;
function detect_internet(){
  if(navigator.onLine){return "You\'re back online"}
  else{return "No Internet Connection"}
}

function isEmail(mailStr) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailStr))
  {
    return (true)
  }
 
}
function isValidPassword(pswordStr) {
  var passw=  /^[A-Za-z]\w{7,14}$/;
  if(pswordStr.match(passw)) 
  { 
  
  return true;
  }
  else
  { 
  
  return false;
  }
}

export default function LoginScreen(params) {
  const navigation = params.navigation;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View
      style={{
        backgroundColor: "#e9bcbe",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold", fontFamily: 'lato-bold' }}>Team Sync</Text>
      <View style={{}}>
        <TextInput
        onChangeText={(userEmail)=> setEmail(userEmail)}
        placeholder="Enter your email"
        keyboardType='email-address'
        
          style={styles.input}
        />
      </View>
      <View style={{ marginTop: 10,}}>

        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={(userPassword)=> setPassword(userPassword)}
          caretHidden={true}
          keyboardAppearance='dark'
          // keyboardType=''
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          alert(email)
          // if (isEmail(email) && isValidPassword(password)) {
            
            navigation.navigate("Main");
            
          // }else{alert("Wrong email or password")}
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 20,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="login" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
        <Text style={styles.connection_indicator}>{detect_internet()}</Text>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignUp");
      }}
       style={{
        padding: 15,
        paddingHorizontal: 80,
        marginTop: 7,
        alignItems: "center",
        flexDirection: "row",
      }}
      >
        <Text style={{ paddingLeft: 10, color: "black",fontWeight:'bold'}}>Or SignUp now!</Text>
      </TouchableOpacity>
      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

    </View>
  );
}


const styles = StyleSheet.create({
  container:{ flex: 1,
    paddingHorizontal: 0,
    backgroundColor: 'white',
    
  },
  connection_indicator:{
    color: 'red'
  },
  input:
  {
    padding: 15,
    borderRadius: 10,
    borderWidth: 0.7,
    paddingHorizontal: 60,
  }
}
);