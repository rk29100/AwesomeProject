import React, { Component } from 'react'
import {  View,Text,Button,StyleSheet} from "react-native";

const settingscreen=({navigation}) => {
   
        return (
            <View style={StyleSheet.container}>
                <Text>Settings Screen</Text>
                <Button
                    title="Click me"
                    onPress={()=>alert("Button Clicked.")}
                />
            </View>
        )
    
}

export default settingscreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc',
    }
})
