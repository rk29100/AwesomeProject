import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from 'react-native-onboarding-swiper';
import blood from '../screens/Remedy/blood';
import chest from '../screens/Remedy/chest';
import diabetes from '../screens/Remedy/diabetes';
import ear from '../screens/Remedy/ear';
import feet from '../screens/Remedy/feet';
import mind from '../screens/Remedy/Mind';
import mouth from '../screens/Remedy/mouth';
import nail from '../screens/Remedy/nail';
import nose from '../screens/Remedy/nose';
import obesity from '../screens/Remedy/obesity';
import skin from '../screens/Remedy/skin';
import sleep from '../screens/Remedy/sleep';
import stomach from '../screens/Remedy/stomach';
import teeth from '../screens/Remedy/teeth';
import throat from '../screens/Remedy/throat';
import veins from '../screens/Remedy/veins';



const Stack=createNativeStackNavigator();


const remedy=({navigation})=>{
    return(
        <>
    <NavigationContainer independent={true}>
        <Stack.Navigator>
                <Stack.Screen name='blood' component={blood}/>
                <Stack.Screen name='chest' component={chest}/>
                <Stack.Screen name='diabetes' component={diabetes}/>
                <Stack.Screen name='ear' component={ear}/>
                <Stack.Screen name='feet' component={feet}/>
                <Stack.Screen name='mind' component={mind}/>
                <Stack.Screen name='mouth' component={mouth}/>
                <Stack.Screen name='nail' component={nail}/>
                <Stack.Screen name='nose' component={nose}/>
                <Stack.Screen name='obesity' component={obesity}/>
                <Stack.Screen name='skin' component={skin}/>
                <Stack.Screen name='stomach' component={stomach}/>
                <Stack.Screen name='sleep' component={sleep}/>
                <Stack.Screen name='teeth' component={teeth}/>
                <Stack.Screen name='throat' component={throat}/>
                <Stack.Screen name='veins' component={veins}/>
        </Stack.Navigator>
    </NavigationContainer>
    </>
    );
}


export default remedy;