import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function JoinTeam(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop:30,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >

      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Join a Team by Link</Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Paste team link ..."
        />
      </View>
      <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter the pin ..."
          inlineImageLeft="addfile"
          keyboardType='number-pad'
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          alert("You have joined successfully")
          navigation.navigate("Home");
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
        <Text style={{ paddingLeft: 10, color: "white" }}>Join</Text>
      </TouchableOpacity>

     
    </View>
  );
}