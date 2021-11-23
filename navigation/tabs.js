
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from 'react-native-onboarding-swiper';

const Tab = createBottomTabNavigator();

import homescreen from '../screens/homescreen';
import findscreen from '../screens/findscreen';
import chatscreen from '../screens/chatscreen';
import portscreen from '../screens/portscreen';
import settingscreen from '../screens/settingscreen';
import onboarding from '../screens/onboarding';

const Stack = createNativeStackNavigator();
const CustomTabBarButton =({children,onPress}) => (
    <TouchableOpacity
        style={{
            top: -40,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
        onPress={onPress}
    
    >
        <View style={{
            width: 80,
            height: 80,
            borderRadius:40,
            backgroundColor:'#ffffff',
            borderColor:'#748c94',
            borderWidth:3
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs =() =>{
    return(
        <>
        {/* <Onboard/> */}
      <NavigationContainer independent={true}>
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
                                width:40,
                                height:40,
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
                                width:40,
                                height:40,
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
                            width: 50,
                            height: 70,
                            tintColor: '#748c94'
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
                                width:40,
                                height:40,
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
                                width:40,
                                height:40,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94'  }}>Question</Text>
                    </View>

                ),
            }}
            />

        </Tab.Navigator>
        </NavigationContainer>
</>
    );
}

export  {Tabs};

const onboard=({navigation})=>{
    return(
        <>
        <NavigationContainer independent={true}>
            <Stack.Navigator headerMode="none">
                <Stack.Screen options={{headerShown: false}} name='onboarding' component={onboarding}/>
                <Stack.Screen options={{headerShown: false}} name='tabs' component={Tabs}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
}

export default onboard;




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
    },
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
});