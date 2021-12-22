import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onboarding from '../screens/onboarding';
import Tabs from './tabs';
import splash from '../screens/splash';
import SignUpScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';



const Stack = createNativeStackNavigator();



const Onboard=({navigation})=>{
    return(
        <>
        <NavigationContainer independent={true} >
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='splash' component={splash}/>
                <Stack.Screen options={{headerShown: false}} name='onboarding' component={onboarding}/>
                <Stack.Screen options={{headerShown:false}} name='SignIn' component={LoginScreen}/>
                <Stack.Screen options={{headerShown:false}} name='SignUp' component={SignUpScreen}/>
                <Stack.Screen options={{headerShown: false}} name='tabs' component={Tabs}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
}

export default Onboard;