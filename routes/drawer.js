import { createDrawerNavigator } from "@react-navigation/drawer";
// import {createAppContainer} from '@react-navigation';
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./homestack";
import AboutStack from "./aboutstack";

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack, 

    },
    About: {
        screen: AboutStack,
    }
})

const Navigator = NavigationContainer(RootDrawerNavigator); 
export default Navigator;