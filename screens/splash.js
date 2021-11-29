import React from 'react';
import { AppRegistry, StyleSheet, View, AppState, Image,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';

const splash=({navigation})=>{
    React.useEffect(()=>{
        setTimeout(() => {
            navigation && navigation.navigate('onboarding')
        }, 3000);
      },[])
    return(
    <View  >
       
          
         <Image
        
        source={require('../assets/icons/my_app.png')}
        style={{height:150,width:'100%',resizeMode:'center',marginTop:300,marginLeft:50}}
      />
          
       
        </View>);
}


export default splash;