import React, { Component } from 'react'
import {  View,Text,Button,StyleSheet} from "react-native";

const portscreen=({navigation}) => {
   
        return (
            <View style={StyleSheet.container}>
                <Text>Port Screen</Text>
                <Button
                    title="Click me"
                    onPress={()=>alert("Button Clicked.")}
                />
            </View>
        )
    
}

export default portscreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc',
    }
})
