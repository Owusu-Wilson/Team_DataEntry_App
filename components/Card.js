import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";



const width = Dimensions.get("screen").width / 2 - 30;

export const Card = ({ item_ }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(item_.screen, item_)}>
      <View style={style.card}>

        <View
          style={{
            alignContent: "center",
            flex: 1,
            resizeMode: "contain",
            flexDirection: 'column'
          }}
        >
  
          <Image
            style={{ marginTop:10, height:'100%',width:'auto', borderRadius:20 }}
            source={item_.img}
          />
        </View>
        <View style={{}}></View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            marginTop: 10,
            color: "white",
          }}
        >
          {item_.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >


        </View>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: "#202020",
    elevation: 10,
    width,
    marginHorizontal: 4,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    
  },
});
