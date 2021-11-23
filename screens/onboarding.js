import Onboarding from 'react-native-onboarding-swiper';
import React, { Component } from 'react';
import {View,Image,StyleSheet,Text}  from 'react-native';
import Tabs from '../navigation/tabs';

const onboarding=({navigation})=> {
   
        return (
            
                <Onboarding
                    onSkip={()=>{navigation && navigation.navigate('tabs', { screen: 'Home' })}}
                    onDone={()=>{navigation && navigation.navigate('tabs', { screen: 'Home' })}}

                    pages={[
                        
                        {
                            title: <Text style={{position:'absolute',color:'#292f33',fontStyle:'italic',fontWeight:'bold',fontSize:60,textAlign:'center',lineHeight:60,top:40}}>SWASTHYA UPCHARA</Text>,
                            // <Text style={{position: 'absolute',
                            //     top: 50, fontSize:37, alignContent:'center',fontStyle:'italic',fontWeight:'bold',color:'#292f33'}}>SWASTHYA UPCHARA</Text>,
                            subtitle: <Text style={{position:'absolute',color:'#292f33',fontStyle:'italic',fontWeight:'bold',fontSize:30,textAlign:'center',bottom:170}}>Heart of Perfect Health..!</Text>,
                            // <Text style={{position: 'absolute',
                            // bottom: 130,
                            // fontSize:30, alignContent:'center',fontStyle:'italic',fontWeight:'bold',color:'#292f33'}}>Heart of Perfect Health..! </Text>,
                            backgroundColor: '#fff',
                            image: <>
                                <Image source={require('../assets/icons/yoga.png')}
                                style={styles.ImageStyle}/>
                                
                            <Image
                            source={require('../assets/icons/ayurveda.jpg')}
                            style={styles.backgroundImageStyle}/>
                            
                            </>
                    ,
                            
                        },
                        // {
                        //     backgroundColor: '#fff',
                        //     image: <Image 
                        //             source={require('../assets/icons/home.png')} 
                        //             // resizeMode='center'
                        //             style={{width:300,height:300}}
                        //             />,
                        //     title: 'Onboarding',
                        //     subtitle: 'Done with React Native Onboarding Swiper',
                        // }
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