
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Onboard from './onboard';

const Tab = createBottomTabNavigator();

import homescreen from '../screens/homescreen';
import findscreen from '../screens/findscreen';
import chatscreen from '../screens/chatscreen';
import portscreen from '../screens/portscreen';
import settingscreen from '../screens/settingscreen';

const CustomTabBarButton =({children,onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
        onPress={onPress}
    
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor:'#e32f45',
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs =() =>{
    return(
        <>
        {/* <Onboard/> */}
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle: {
                    position:'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}    
        >
            <Tab.Screen name='Home' component={homescreen} options={{
                headerShown: false,
                tabBarIcon:({focused}) =>(
                    <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94'  }}>HOME</Text>
                    </View>

                ),
            }}/>
            <Tab.Screen name='Find' component={findscreen}
            options={{
                headerShown: false,
                tabBarIcon:({focused}) =>(
                    <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/remedy.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94'  }}>REMEDY</Text>
                    </View>

                ),
            }}
            
            />
            <Tab.Screen name='Port' component={portscreen}
             options={{
                headerShown: false,
                 tabBarIcon:({focused}) =>(
                     <Image
                        source={require('../assets/icons/plus.png')}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 60,
                            // tintColor:'#fff',
                        }}
                     />
                 ),
                 tabBarButton: (props) =>(
                     <CustomTabBarButton {...props}/>
                 )
             }}
            />


            <Tab.Screen name='Setting' component={settingscreen}
            options={{
                headerShown: false,
                tabBarIcon:({focused}) =>(
                    <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/News.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94'  }}>NEWS</Text>
                    </View>

                ),
            }}
            />
            <Tab.Screen name='Chat' component={chatscreen}
            options={{
                headerShown: false,
                tabBarIcon:({focused}) =>(
                    <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/chat.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94'  }}>CHAT</Text>
                    </View>

                ),
            }}
            />

        </Tab.Navigator>
</>
    );
}

export default Tabs;

const styles=StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation:5,
    }
});