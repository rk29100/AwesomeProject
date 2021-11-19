import Onboarding from 'react-native-onboarding-swiper';
import React, { Component } from 'react';
import {View,Image}  from 'react-native';

const onboarding=({navigation})=> {
   
        return (
            
                <Onboarding
                    onSkip={()=>{navigation && navigation.navigate("home")}}
                    onDone={()=>{navigation && navigation.navigate("home")}}

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
