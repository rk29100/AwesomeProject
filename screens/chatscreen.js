import React, { Component } from 'react'
import {  View,Text,Button,StyleSheet} from "react-native";

const chatscreen=({navigation}) => {
   
        return (
            <View style={styles.container}>
                <Text>Question Screen</Text>
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
    },
    container1: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
})
