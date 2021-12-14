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

        {/* <View
          style={{
            alignContent: "space-between",
            flex: 1,
            resizeMode: 'contain',
            flexDirection: 'column'
          }}
        > */}
  
          {/* <Image
            style={{ marginTop:10, height:'100%',width:'auto', borderRadius:3 }}
            source={item_.img}
          /> */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
            color: "white",
            position: 'relative',
            alignSelf: 'center'

          }}
        >
          {item_.name}
        </Text>
        </View>
        {/* <View style={{}}></View> */}

      {/* </View> */}
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: "#180829",
    elevation: 10,
    width:300,
    marginHorizontal: 4,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    alignSelf: 'center', 
    alignItems: 'center',
    alignContent: 'center'
    
  },
});


