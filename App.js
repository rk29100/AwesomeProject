import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Onboard from './navigation/onboard';
import { BackHandler, Alert } from 'react-native';


const App = () => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null)
    React.useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);




    return (
        <>

            <NavigationContainer>
                <Onboard />
            </NavigationContainer>
        </>
    );
}

export default App;