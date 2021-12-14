import { createStackNavigator } from "@react-navigation/stack";


import OnboardingScreen from "../screens/OnboardingUI";
import HomeScreen from "../screens/HomeScreen";
import Home from "../screens/DashBoardScreen";
import BookmarkScreen from "../screens/BookmarkScreen";

const screens = {
    Home: {
        screen: HomeScreen, 
        navigationOptions:{title: 'GameZone'}
    },
    Bookmark: {
        screen: BookmarkScreen, 
        navigationOptions:{title: 'App Bookmarks'}
    },

    }


const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle: { backGroundColor: '#eee', height: 60}
}});


export default HomeStack;