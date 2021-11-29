import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Onboard from './navigation/onboard';
import Remedy from './navigation/remedy';

const App =()=>{
    return (
        <>
        
        <NavigationContainer>
            <Onboard/>
        </NavigationContainer>
        </>
    );
}

export default App;