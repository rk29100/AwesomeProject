
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
    DrawerLayoutAndroid,
    ScrollView
} from 'react-native';
import { authentication } from '../firebase/firebase-config';
import { signOut } from "firebase/auth";
import { Divider } from 'react-native-paper';
import { deviceHeight } from '../Dimen'

const data = [
    {
        img_uri: require('../assets/icons/1.jpg'),
        link: 'https://drive.google.com/file/d/1aPmztjluscZq8Ml35OwkBpBk6ciEVvoy/view?usp=sharing'

    },
    {
        img_uri: require('../assets/icons/2.jpg'),
        link: 'https://drive.google.com/file/d/145pLHaHMBFfDsT3UV3rLfTGByIbzOHXE/view?usp=sharing'

    },
    {
        img_uri: require('../assets/icons/3.jpg'),
        link: 'https://drive.google.com/file/d/11OJI7AcnSkIWf8fQK5sFlMmdVaA3Ce-8/view?usp=sharing'

    },

    {
        img_uri: require('../assets/icons/4.jpg'),
        link: 'https://drive.google.com/file/d/1AmzUhHPVNQX9S_FN5taoCF5sTPxmhrAF/view?usp=sharing'

    },
];


const data1 = [
    {
        img_uri: require('../assets/icons/ayu1.jpg'),
        link: 'https://drive.google.com/file/d/1fLF1-T_8F2YXMZAtJn-vQZm8-yxLDT7b/view?usp=sharing'


    },
    {
        img_uri: require('../assets/icons/ayu2.jpg'),
        link: 'https://drive.google.com/file/d/1uvBNHH_CEBgrBXzg5xT3g7iwtm1r-zZc/view?usp=sharing'

    },
    {
        img_uri: require('../assets/icons/ayu3.jpg'),
        link: 'https://drive.google.com/file/d/1wgE-xQ5tUwzy_8u-sLwYxAuor8Kr90FL/view?usp=sharing'

    },

    {
        img_uri: require('../assets/icons/ayu4.jpg'),
        link: 'https://drive.google.com/file/d/1MILPNeaWBtIHTWh0L84CwKjyBXj3A3s1/view?usp=sharing'

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
            <View style={{ height: deviceHeight - 50 }} >
                <DrawerLayoutAndroid
                    ref={(drawer) => { this.drawer = drawer }}
                    drawerWidth={250}
                    drawerPosition={"left"}
                    renderNavigationView={() => {
                        return (
                            <View style={{ backgroundColor: 'white' }}>
                                <>
                                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={{ height: 80, width: 80, alignSelf: 'center', marginTop: 20 }} />

                                </>
                                <>
                                    <Text style={{ color: '#3D550C', fontSize: 15, alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>{authentication.currentUser?.email}</Text>
                                </>

                                <Divider />

                                <View>
                                    <TouchableOpacity onPress={() => { Alert.alert("Swasthya Upchara", "This app will guide you about the best ayurveda services near you and give you best remedies on your daily diseases.") }} style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>
                                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4245/4245351.png' }} style={{ height: 30, width: 30 }} />
                                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }} >About</Text>
                                    </TouchableOpacity>

                                </View>
                                <Divider />
                                <Divider />
                                <View>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('WebView2', { url: 'https://youtu.be/XozF9VBLEfU' }) }} style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>
                                        <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/1652/premium/1652961.png?token=exp=1643361399~hmac=479df3dc713d44b7d97b052a31b5fbc1' }} style={{ height: 30, width: 30 }} />
                                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }}>Know Ayurveda</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider />
                                <View>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Daily') }} style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>
                                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5137/5137531.png' }} style={{ height: 30, width: 30 }} />
                                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }}>Daily Routine As per Ayurveda</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider />
                                <View >
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('WebView2', { url: 'https://static.wixstatic.com/media/b34ead_08507d7fefec47cc8eccdbd86f4cf567~mv2.png/v1/fit/w_1000%2Ch_1000%2Cal_c/file.png' }) }} style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>
                                        <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/896/premium/896442.png?token=exp=1643361350~hmac=25e163324077b21d870c382b14794f9b' }} style={{ height: 30, width: 30 }} />
                                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }} >Ayurvedic Clock</Text>
                                    </TouchableOpacity>

                                </View>
                                <Divider />
                                <View >
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('covid') }} style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>

                                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/478/478533.png' }} style={{ height: 30, width: 30 }} />

                                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }} >Ayurveda for Covid-19</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider />
                                <View>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('yoga') }} style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>

                                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2043/2043790.png' }} style={{ height: 30, width: 30 }} />

                                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }} >Yoga</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider />
                                <View>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('herb') }} style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>

                                        <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/521/premium/521853.png?token=exp=1643361399~hmac=e00d9ce696afb11dca8e910b1ef5670d' }} style={{ height: 30, width: 30 }} />

                                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }} >Herb</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider />


                                <View>

                                    <TouchableOpacity onPress={() => { this.handleSignOut(); this.drawer.closeDrawer(); }} style={{ marginTop: 20 }}>

                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, alignSelf: 'center', backgroundColor: '#3D550C', paddingHorizontal: 30, borderRadius: 6 }} >Logout</Text>
                                    </TouchableOpacity>


                                </View>
                            </View>

                        )
                    }}>

                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 50 }}>
                        <Image source={require('../assets/icons/my_app.png')} style={{ width: deviceHeight / 26, height: deviceHeight / 9.6, paddingHorizontal: 200, marginStart: 45, marginTop: -40, marginBottom: 20 }} />
                        <View style={{ marginBottom: 5, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.drawer.openDrawer()} >
                                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/56/56763.png' }} style={{ width: deviceHeight / 26, height: deviceHeight / 26, marginStart: 5 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 35, paddingHorizontal: 15, marginTop: - 10 }}>Home</Text>

                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 20 }}>

                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ height: 300 }}>
                                    {data.map((data1, index) => {
                                        return (
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('WebView2', { url: `${data1.link}` }) }}>
                                                <Image source={data1.img_uri} style={{ height: 280, width: 350, margin: 15, borderRadius: 5, }} />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </ScrollView>

                            </View>


                            <View style={{ justifyContent: 'center', width: '100%', marginBottom: 20 }}>

                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {data1.map((data1, index) => {
                                        return (
                                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('WebView2', { url: `${data1.link}` }) }}>
                                                    <Image source={data1.img_uri} style={{ height: 280, width: 480, margin: 10, borderRadius: 5, borderWidth: 2, borderColor: 'black', marginBottom: 20 }} />
                                                </TouchableOpacity>
                                            </ScrollView>
                                        );
                                    })}
                                </ScrollView>

                            </View>

                        </ScrollView>


                    </View>

                </DrawerLayoutAndroid >

            </View >
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





