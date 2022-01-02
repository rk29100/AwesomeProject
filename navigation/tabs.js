
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';

import homescreen from '../screens/homescreen';
import portscreen from '../screens/portscreen';
import settingscreen from '../screens/settingscreen';
import chatscreen from '../screens/chatscreen';
import findscreen from '../screens/findscreen';


// const Tab = createBottomTabNavigator();


// const CustomTabBarButton =({children,onPress}) => (
//     <TouchableOpacity
//         style={{
//             top: -40,
//             justifyContent:'center',
//             alignItems:'center',
//             ...styles.shadow
//         }}
//         onPress={onPress}

//     >
//         <View style={{
//             width: 80,
//             height: 80,
//             borderRadius:40,
//             backgroundColor:'#ffffff',
//             borderColor:'#748c94',
//             borderWidth:3
//         }}>
//             {children}
//         </View>
//     </TouchableOpacity>
// );

// const Tabs =() =>{
//     return(
//         <>
//       <NavigationContainer independent={true}>
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarShowLabel:false,
//                 tabBarStyle: {
//                     position:'absolute',
//                     bottom: 10,
//                     left: 5,
//                     right: 5,
//                     elevation: 0,
//                     backroundColor: '#ffffff',
//                     borderRadius: 15,
//                     height: 90,
//                     ...styles.shadow
//                 }
//             }}    
//         >
//             <Tab.Screen name='Home' component={homescreen} options={{
//                 headerShown: false,
//                 tabBarIcon:({focused}) =>(
//                     <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
//                         <Image
//                             source={require('../assets/icons/home.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width:40,
//                                 height:40,
//                                 tintColor: focused ? '#3D550C' : '#748c94',

//                             }}
//                         />
//                         <Text style={{color: focused ? '#3D550C' : '#748c94'  }}>HOME</Text>
//                     </View>

//                 ),
//             }}/>
//             <Tab.Screen name='Find' component={findscreen}
//             options={{
//                 headerShown: false,
//                 tabBarIcon:({focused}) =>(
//                     <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
//                         <Image
//                             source={require('../assets/icons/remedy.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width:40,
//                                 height:40,
//                                 tintColor: focused ?'#3D550C' : '#748c94'
//                             }}
//                         />
//                         <Text style={{color: focused ? '#3D550C' : '#748c94'  }}>REMEDY</Text>
//                     </View>

//                 ),
//             }}

//             />
//             <Tab.Screen name='Port' component={portscreen}
//              options={{
//                 headerShown: false,
//                  tabBarIcon:({focused}) =>(
//                      <Image
//                         source={require('../assets/icons/plus.png')}
//                         resizeMode='contain'
//                         style={{
//                             width: 50,
//                             height: 70,
//                             tintColor: '#748c94'
//                         }}
//                      />
//                  ),
//                  tabBarButton: (props) =>(
//                      <CustomTabBarButton {...props}/>
//                  )
//              }}
//             />


//             <Tab.Screen name='Setting' component={settingscreen}
//             options={{
//                 headerShown: false,
//                 tabBarIcon:({focused}) =>(
//                     <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
//                         <Image
//                             source={require('../assets/icons/News.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width:40,
//                                 height:40,
//                                 tintColor: focused ?'#3D550C' : '#748c94'
//                             }}
//                         />
//                         <Text style={{color: focused ? '#3D550C' : '#748c94'  }}>NEWS</Text>
//                     </View>

//                 ),
//             }}
//             />
//             <Tab.Screen name='Chat' component={chatscreen}
//             options={{
//                 headerShown: false,
//                 tabBarIcon:({focused}) =>(
//                     <View style={{ alignItems:'center', justifyContent:'center', top: 10}}>
//                         <Image
//                             source={require('../assets/icons/chat.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width:40,
//                                 height:40,
//                                 tintColor: focused ? '#3D550C' : '#748c94'
//                             }}
//                         />
//                         <Text style={{color: focused ? '#3D550C' : '#748c94'  }}>Question</Text>
//                     </View>

//                 ),
//             }}
//             />

//         </Tab.Navigator>
//         </NavigationContainer>
// </>
//     );
// }

// export  default Tabs;









// const styles=StyleSheet.create({
//     shadow:{
//         shadowColor:'#7F5DF0',
//         shadowOffset:{
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius:3.5,
//         elevation:5,
//     },
//     container: {
//         flex: 1,
//       },
//       image: {
//         flex: 1,
//         justifyContent: "center"
//       },
// });

const Tabs = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home', color: '#33401c' },
        { key: 'remedy', title: 'Remedy', icon: 'pill', color: '#3b4b21' },
        { key: 'near', title: 'Hospital', icon: 'hospital-box-outline', color: '#445626' },
        { key: 'news', title: 'News', icon: 'newspaper-variant-multiple', color: '#4d602a' },
        { key: 'chat', title: 'Chat', icon: 'wechat', color: '#2b3618' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: homescreen,
        remedy: findscreen,
        near: portscreen,
        news: settingscreen,
        chat: chatscreen,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default Tabs;