import Onboarding from 'react-native-onboarding-swiper';
import React, { Component } from 'react';
import {View,Image,StyleSheet,Text}  from 'react-native';
import tabs from '../navigation/tabs';

const onboarding=({navigation})=> {
   
        return (
            
                <Onboarding
                    onSkip={()=>{navigation && navigation.navigate('tabs', { screen: 'Home' })}}
                    onDone={()=>{navigation && navigation.navigate('tabs', { screen: 'Home' })}}

                    pages={[
                    {
                        backgroundColor: 'white',
                        image: <Image 
                                source={require('../assets/icons/onboard1.png')} 
                                // resizeMode='center'
                                style={{width:300,height:300}}
                                />,
                        title: <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold',color:'#3D550C',marginBottom:40}}>Ayurveda</Text>,
                        subtitle: <Text style={{textAlign:'center',color:'#3D550C',fontSize:30,fontWeight:'bold'}}>Naturalize to make yourself energized.</Text>,
                    },
                        {
                            backgroundColor: 'white',
                            image: <Image 
                                    source={require('../assets/icons/onboard2.png')} 
                                    // resizeMode='center'
                                    style={{width:300,height:300}}
                                    />,
                                    title: <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold',color:'#3D550C',marginBottom:20}}>Ayurveda</Text>,
                                    subtitle: <Text style={{textAlign:'center',color:'#3D550C',fontSize:30,fontWeight:'bold'}}>Heart of Perfect Health!</Text>,
                        },
                        {
                            backgroundColor: 'white',
                            image: <Image 
                                    source={require('../assets/icons/onboard3.png')} 
                                    // resizeMode='center'
                                    style={{width:300,height:300}}
                                    />,
                                    title: <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold',color:'#3D550C',marginBottom:40}}>Ayurveda</Text>,
                                    subtitle: <Text style={{textAlign:'center',color:'#3D550C',fontSize:30,fontWeight:'bold'}}>Choose ayurveda and stay fit.</Text>,
                        },
                        
                        ]}
/>
                
            
        )
    
}

export default onboarding;

const styles=StyleSheet.create({
    backgroundImageStyle: {
        // width:"100%",
        // height:"50%",
         position: 'absolute',
        opacity: 0.18,
        zIndex: 0,
        width: 500,
        height: 1000,
        top:-340,
        // transform:[{rotate:"90deg"}]
      },
      ImageStyle:{
        position:'relative',
                
      }
});