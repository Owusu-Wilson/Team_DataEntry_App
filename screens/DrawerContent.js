// PACKAGES AND LIBRARIES IMPORTS
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

// ICONS IMPORTS
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// INTERNAL PROJECT FILES IMPORTS


// VARIABLES
const avatar_icon = require("../images/default_avatar.png")
let username = "John Sparrows";
let user_team_name = "@slabsgh" 
let current_team = 'epsu_legon'
let num_currTeam_members = 30

function toggleTheme(){
    alert("Theme Changed")
}
export function DrawerContent(props) {
    const theme = useTheme();

    // const {  toggleTheme } = React.useContext(AuthContext);


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                <Drawer.Section style={styles.drawerSection}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={
                                    avatar_icon
                                }
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{username}</Title>
                                <Caption style={styles.caption}>{user_team_name}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>5</Paragraph>
                                <Caption style={styles.caption}>Groups</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>{num_currTeam_members} members</Paragraph>
                                <Caption style={styles.caption}>{current_team}</Caption>
                            </View>
                        </View>
                    </View>
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign name="codesquare" size={size} color={color} />
                            )}
                            label="Admin Tools"
                            onPress={() => {props.navigation.navigate('Admin')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign name="setting" size={size} color={color} />

                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple 
                            // onPress={() => {toggleTheme()}}
                            >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch 
                                    // value={theme.mode === 'dark'}
                                    // onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
                                    />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
