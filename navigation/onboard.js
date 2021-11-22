import React, { Component } from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onboarding from '../screens/onboarding';
import homescreen from '../screens/homescreen';
import findscreen from '../screens/findscreen';
import chatscreen from '../screens/chatscreen';
import portscreen from '../screens/portscreen';
import settingscreen from '../screens/settingscreen';
import Tabs from './tabs';


const AppStack=createStackNavigator();



const onboard=({navigation})=>{
    return(
        <>
        <NavigationContainer independent={true}>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name='onboarding' component={onboarding}/>

                <AppStack.Screen name='tabs' component={Tabs}/>
               



            </AppStack.Navigator>
        </NavigationContainer>
        </>
    );
}

export default onboard;