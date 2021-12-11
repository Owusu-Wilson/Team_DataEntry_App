import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ViewData(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >

      <Text style={{ fontSize: 40, fontWeight: "bold" }}>View Data and Statistics</Text>
      
    </View>
  );
}