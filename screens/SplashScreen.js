import React from "react";
import { View,TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function SplashScreen(params) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
        <AntDesign name="next" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Get Started</Text>
      </TouchableOpacity>
        </View>
      </View>

  );
}