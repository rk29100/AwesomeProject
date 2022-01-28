
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute, useNavigationState } from '@react-navigation/native';
import homescreen from '../screens/homescreen';
import portscreen from '../screens/portscreen';
import settingscreen from '../screens/settingscreen';
import chatscreen from '../screens/chatscreen';
import findscreen from '../screens/findscreen';
import WebViewComponent from '../screens/WebView';
import LoginScreen from '../screens/LoginScreen';
import blood from '../screens/Remedy/blood'
import chest from '../screens/Remedy/chest'
import diabetes from '../screens/Remedy/diabetes'
import ear from '../screens/Remedy/ear'
import feet from '../screens/Remedy/feet'
import Mind from '../screens/Remedy/Mind'
import mouth from '../screens/Remedy/mouth'
import nail from '../screens/Remedy/nail'
import nose from '../screens/Remedy/nose'
import obesity from '../screens/Remedy/obesity'
import skin from '../screens/Remedy/skin'
import sleep from '../screens/Remedy/sleep'
import stomach from '../screens/Remedy/stomach'
import teeth from '../screens/Remedy/teeth'
import throat from '../screens/Remedy/throat'
import veins from '../screens/Remedy/veins'
import Covid from '../screens/Covid';
import Yoga from '../screens/Yoga';
import { DeprecatedAccessibilityRoles } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewAccessibility';
import Daily from '../screens/Daily';
import Herb from '../screens/Herb';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {

    const routeName = getFocusedRouteNameFromRoute(route)


    if (routeName == 'covid' || (routeName == 'signin') || routeName == 'yoga' || routeName == 'WebView2' || routeName == 'WebView' || routeName == 'Daily' || routeName == 'herb'
    ) {
        return 'none';
    }

    return 'flex';
};

const Tabs = () => {
    return (
        <>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                    }}
                >
                    <Tab.Screen name='Home' component={ThirdScreenNavigator}
                        options={({ route }) => ({
                            tabBarStyle: {
                                display: getTabBarVisibility(route),

                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (

                                <Image
                                    source={require('../assets/icons/home.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 40,
                                        height: 40,
                                        tintColor: focused ? '#3D550C' : '#748c94',

                                    }}
                                />
                            ),
                        })}


                    />
                    <Tab.Screen name='Find' component={FourthScreenNavigator}
                        options={({ route }) => ({
                            tabBarStyle: {
                                display: getTabBarVisibility(route),

                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (

                                <Image
                                    source={require('../assets/icons/remedy.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 40,
                                        height: 40,
                                        tintColor: focused ? '#3D550C' : '#748c94',

                                    }}
                                />
                            ),
                        })}


                    />
                    <Tab.Screen name='Port' component={SecondScreenNavigator}

                        options={({ route }) => ({
                            tabBarStyle: {
                                display: getTabBarVisibility(route),

                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (

                                <Image
                                    source={require('../assets/icons/plus.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 40,
                                        height: 40,
                                        tintColor: focused ? '#3D550C' : '#748c94',

                                    }}
                                />
                            ),
                        })}

                    />


                    <Tab.Screen name='Setting' component={FirstScreenNavigator}
                        options={({ route }) => ({
                            tabBarStyle: {
                                display: getTabBarVisibility(route),

                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (

                                <Image
                                    source={require('../assets/icons/News.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 40,
                                        height: 40,
                                        tintColor: focused ? '#3D550C' : '#748c94',

                                    }}
                                />
                            ),
                        })}

                    />
                    <Tab.Screen name='Chat' component={chatscreen}
                        options={({ route }) => ({
                            tabBarStyle: {
                                display: getTabBarVisibility(route),

                            },
                            headerShown: true,
                            tabBarStyle: { display: 'none' },
                            tabBarIcon: ({ focused }) => (

                                <Image
                                    source={require('../assets/icons/chat.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 40,
                                        height: 40,
                                        tintColor: focused ? '#3D550C' : '#748c94',

                                    }}
                                />
                            ),
                        })}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Tabs;





const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});

const FirstScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="News"
                component={settingscreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="WebView"
                component={WebViewComponent}
            />
        </Stack.Navigator>
    );
}

export { FirstScreenNavigator };

const SecondScreenNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ headerShown: false }}
                name="hospitals"
                component={portscreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="WebView1"
                component={WebViewComponent}
            />
        </Stack.Navigator>
    );
}
export { SecondScreenNavigator };

const ThirdScreenNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ headerShown: false }}
                name="home"
                component={homescreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="signin"
                component={LoginScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="covid"
                component={Covid}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="yoga"
                component={Yoga}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="WebView2"
                component={WebViewComponent}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Daily"
                component={Daily}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="herb"
                component={Herb}
            />


        </Stack.Navigator>
    );
}
export { ThirdScreenNavigator };

const FourthScreenNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ headerShown: false }}
                name="remedy1"
                component={findscreen}
            />
            <Stack.Screen name='Blood' component={blood} />
            <Stack.Screen name='Chest' component={chest} />
            <Stack.Screen name='Diabetes' component={diabetes} />
            <Stack.Screen name='Ear' component={ear} />
            <Stack.Screen name='Feet' component={feet} />
            <Stack.Screen name='Mind' component={Mind} />
            <Stack.Screen name='Mouth' component={mouth} />
            <Stack.Screen name='Nail' component={nail} />
            <Stack.Screen name='Nose' component={nose} />
            <Stack.Screen name='Obesity' component={obesity} />
            <Stack.Screen name='Skin' component={skin} />
            <Stack.Screen name='Sleep' component={sleep} />
            <Stack.Screen name='Stomach' component={stomach} />
            <Stack.Screen name='Teeth' component={teeth} />
            <Stack.Screen name='Throat' component={throat} />
            <Stack.Screen name='Veins' component={veins} />
        </Stack.Navigator>
    );
}
export { FourthScreenNavigator };









// const Tabs = () => {
//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//         { key: 'home', title: 'Home', icon: 'home', color: '#4285F4' },
//         { key: 'remedy', title: 'Remedy', icon: 'pill', color: '#EA4335' },
//         { key: 'near', title: 'Hospital', icon: 'hospital-box-outline', color: '#FBBC05' },
//         { key: 'news', title: 'News', icon: 'newspaper-variant-multiple', color: '#34A853' },
//         { key: 'chat', title: 'Chat', icon: 'wechat', color: '#2b3618' }
//     ]);

//     const renderScene = BottomNavigation.SceneMap({
//         home: homescreen,
//         remedy: findscreen,
//         near: portscreen,
//         news: settingscreen,
//         chat: chatscreen,
//     });

//     return (
//         <BottomNavigation
//             navigationState={{ index, routes }}
//             onIndexChange={setIndex}
//             renderScene={renderScene}
//         />
//     );
// };



// export default Tabs;