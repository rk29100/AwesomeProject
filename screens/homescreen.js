
import React, { useRef, useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Button,
    Alert,
    StyleSheet,
    TouchableOpacity,
    DrawerLayoutAndroid
} from 'react-native';
import { authentication } from '../firebase/firebase-config';
import { signOut } from "firebase/auth";


import Carousel from 'react-native-snap-carousel';
import { Divider } from 'react-native-paper';

const data = [
    {
        img_uri: require('../assets/icons/1.jpg'),

    },
    {
        img_uri: require('../assets/icons/2.jpg'),

    },
    {
        img_uri: require('../assets/icons/3.jpg'),

    },

    {
        img_uri: require('../assets/icons/4.jpg'),

    },


];



export default class homescreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: data,
        };
    }


    _renderItem = ({ item, index }) => {
        return (
            <View
                style={{

                    borderRadius: 5,
                    height: '50%',
                }}>
                <Image
                    style={{
                        flex: 1,
                        margin: '5%',
                        marginLeft: '-2%',
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}
                    source={item.img_uri}
                />

            </View>
        );
    }

    handleSignOut = () => {
        signOut(authentication).then((re) => {
            console.log('signout');
            console.log(re);

            Alert.alert("Success ✅", "Account logged out successfully.");
        }).catch((e) => {
            console.log(e);
            Alert.alert("Failed ❌", "Account logout failed.")
        })
    }

    render() {
        return (
            <>
                <DrawerLayoutAndroid
                    ref={(drawer) => { this.drawer = drawer }}
                    drawerWidth={250}
                    drawerPosition={"left"}
                    renderNavigationView={() => {
                        return (
                            <View style={{ backgroundColor: 'white' }}>
                                <>
                                    <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/5397/premium/5397570.png?token=exp=1641287888~hmac=e505a2594d00462cf788f7e5782827cd' }} style={{ height: 80, width: 80, alignSelf: 'center', marginTop: 20 }} />

                                </>
                                <>
                                    <Text style={{ color: '#3D550C', fontSize: 15, alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>{authentication.currentUser?.email}</Text>
                                </>

                                <View style={{ marginTop: 60 }}>
                                    <Divider />
                                    <Text style={{ color: 'black', fontSize: 30 }} onPress={() => { Alert.alert("Swasthya Upchara", "This app will guide you about the best ayurveda services near you and give you best remedies on your daily diseases.") }}>About</Text>
                                    <Divider />
                                </View>

                                <View style={{ bottom: 100 }}>
                                    <TouchableOpacity onPress={() => { this.handleSignOut(); this.drawer.closeDrawer() }}>

                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, alignSelf: 'center', backgroundColor: '#3D550C', paddingHorizontal: 30, borderRadius: 6 }}>Logout</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )
                    }}>

                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 50 }}>
                        <Image source={require('../assets/icons/my_app.png')} style={{ width: 30, height: 80, paddingHorizontal: 200, marginStart: 45, marginTop: -40, marginBottom: 20 }} />
                        <View style={{ marginBottom: 30, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.drawer.openDrawer()} >
                                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/56/56763.png' }} style={{ width: 30, height: 30, marginStart: 5 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 35, paddingHorizontal: 15, marginTop: -10 }}>Home</Text>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                            <Carousel
                                layout={'default'}
                                ref={ref => (this.carousel = ref)}
                                data={this.state.carouselItems}
                                sliderWidth={200}
                                itemWidth={320}
                                renderItem={this._renderItem}
                                onSnapToItem={index => this.setState({ activeIndex: index })}
                            />
                        </View>

                    </View>
                </DrawerLayoutAndroid>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    }
});





