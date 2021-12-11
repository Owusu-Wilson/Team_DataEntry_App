import React from "react";
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props})=>(
    <Button
        title='Done'
        color="black"
        {...props}
    />
);
const OnboardingScreen = ({navigation}) => {
    return(
            <Onboarding
            DoneButtonComponent={Done}
            onSkip={()=>navigation.replace("Login")}
            onDone={()=>navigation.navigate("Login")}
            pages={[
        {

            
            // the 1st onboarding page
            backgroundColor: colors.cyan,
            image: <Image source={require('../images/data.png')} />,
            title: 'Welcome',
            subtitle: 'Collect data easily during a survey.',
        },
        // ============================================================
        {
            // the 2nd onboarding page
            backgroundColor: colors.yellow,
            image: <Image source={require('../images/data.png')} />,
            title: 'Get Set!',
            subtitle: 'Sync data from multiple demographers.',
        },
        // // ============================================================
        // ============================================================
        {
            // the 3rd onboarding page
            backgroundColor: colors["light-pink"],
            image: <Image source={require('../images/data.png')} />,
            title: 'Go',
            subtitle: 'Lets get you started!.',
        },
        // // ============================================================
    
    ]}
/>

     );
 }

export default OnboardingScreen;


const colors = {
    'cyan': '#a6e4d0',
    'yellow': '#fdeb93',
    'light-pink': '#e9bcbe'
}
const styles = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
     },
 });