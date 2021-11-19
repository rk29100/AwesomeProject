import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Onboarding from './screens/onboarding';

const App =()=>{
    return (
        <>
        
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
        </>
    );
}

export default App;