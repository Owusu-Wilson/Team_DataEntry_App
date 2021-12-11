import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CreateTeam(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text style={{ fontSize: 30, color: "grey" }}>Collect Data Fast</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Create a new Team </Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter name for team"
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
        />
      </View>
      <TouchableOpacity
        onPress={() => {
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
        <AntDesign name="antdesign" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Create</Text>
      </TouchableOpacity>

     
    </View>
  );
}