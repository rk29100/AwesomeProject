import Onboarding from 'react-native-onboarding-swiper';
import React, { Component } from 'react';
import {View,Image}  from 'react-native';
import Tabs from '../navigation/tabs';

const onboarding=({navigation})=> {
   
        return (
            
                <Onboarding
                    onSkip={()=>{navigation && navigation.navigate('tabs', { screen: 'Home' })}}
                    onDone={()=>{navigation && navigation.navigate('tabs', { screen: 'Home' })}}

                    pages={[
                        {
                            backgroundColor: '#fff',
                            image: <Image 
                                source={require('../assets/icons/remedy.png')} 
                                // resizeMode='center' 
                                style={{width:300,height:300}} />,
                            title: 'Onboarding',
                            subtitle: 'Done with React Native Onboarding Swiper',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image 
                                    source={require('../assets/icons/home.png')} 
                                    // resizeMode='center'
                                    style={{width:300,height:300}}
                                    />,
                            title: 'Onboarding',
                            subtitle: 'Done with React Native Onboarding Swiper',
                        }
                        ]}
/>
                
            
        )
    
}

export default onboarding;
