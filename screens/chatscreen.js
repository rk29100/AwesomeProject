import React, { Component } from 'react'
import {  View,Text,Button,StyleSheet} from "react-native";

const chatscreen=({navigation}) => {
   
        return (
            <View style={StyleSheet.container}>
                <Text>chat Screen</Text>
                <Button
                    title="Click me"
                    onPress={()=>alert("Button Clicked.")}
                />
            </View>
        )
    
}

export default chatscreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc',
    }
})
