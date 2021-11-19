import React, { Component } from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onboarding from '../screens/onboarding';
import homescreen from '../screens/homescreen';

const AppStack=createNativeStackNavigator();



const onboard=({navigation})=>{
    return(
        <>
        <NavigationContainer independent={true}>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name='onboarding' component={onboarding}/>

                <AppStack.Screen name='home' component={homescreen}/>


            </AppStack.Navigator>
        </NavigationContainer>
        </>
    );
}

export default onboard;