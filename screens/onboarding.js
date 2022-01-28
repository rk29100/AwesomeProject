import Onboarding from 'react-native-onboarding-swiper';
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import tabs from '../navigation/tabs';
import { deviceHeight } from '../Dimen';


const onboarding = ({ navigation }) => {

    return (

        <Onboarding
            onSkip={() => { navigation && navigation.navigate('SignIn') }}
            onDone={() => { navigation && navigation.navigate('SignIn') }}

            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image
                        source={require('../assets/icons/gif3.gif')}
                        // resizeMode='center'
                        style={{ width: "100%", height: deviceHeight / 2.6 }}
                    />,
                    title: <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: '#3D550C', marginBottom: 40 }}></Text>,
                    subtitle: <Text style={{ textAlign: 'center', color: '#3D550C', fontSize: 30, fontWeight: 'bold' }}>Naturalize to make yourself energized.</Text>,
                },
                {
                    backgroundColor: 'white',
                    image: <Image
                        source={require('../assets/icons/gif1.gif')}
                        // resizeMode='center'
                        style={{ width: "100%", height: deviceHeight / 2.6 }}
                    />,
                    title: <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: '#3D550C', marginBottom: 20 }}></Text>,
                    subtitle: <Text style={{ textAlign: 'center', color: '#3D550C', fontSize: 30, fontWeight: 'bold' }}>Heart of Perfect Health!</Text>,
                },
                {
                    backgroundColor: 'white',
                    image: <Image
                        source={require('../assets/icons/gif22.gif')}
                        // resizeMode='center'
                        style={{ width: "100%", height: deviceHeight / 2.8 }}
                    />,
                    title: <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: '#3D550C', marginBottom: 40 }}></Text>,
                    subtitle: <Text style={{ textAlign: 'center', color: '#3D550C', fontSize: 30, fontWeight: 'bold' }}>Choose ayurveda and stay fit.</Text>,
                },

            ]}
        />


    )

}

export default onboarding;

const styles = StyleSheet.create({
    backgroundImageStyle: {
        // width:"100%",
        // height:"50%",
        position: 'absolute',
        opacity: 0.18,
        zIndex: 0,
        width: 500,
        height: 1000,
        top: -340,
        // transform:[{rotate:"90deg"}]
    },
    ImageStyle: {
        position: 'relative',

    }
});