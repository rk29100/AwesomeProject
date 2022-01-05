import React, { Component } from 'react'
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { authentication } from '../firebase/firebase-config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { sendPasswordResetEmail } from 'firebase/auth';
import COLORS from '../consts/colors';
import STYLES from '../styles/styles';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

    const forgotPassword = () => {

        console.log("Reset email sent to :  " + email);
        sendPasswordResetEmail(authentication, email, null)
            .then(() => {
                Alert.alert("Success ✅", "Reset email sent to :  " + email);
            })
            .catch(function (e) {
                console.log(e);
                Alert.alert("Reset Password failed ❌", "Missing Email.")
            });
    };

    return (
        <View style={{ marginTop: 20 }}>
            <View style={styles.container1}>
                <Text style={styles.title}>
                    Reset Password
                </Text>

            </View>

            <View style={STYLES.inputContainer}>
                <Icon

                    name="mail-outline"
                    color={COLORS.light}
                    size={20}
                    style={STYLES.inputIcon}
                />
                <TextInput placeholder="Email" style={STYLES.input} value={email} onChangeText={text => setEmail(text)} />
            </View>
            <TouchableOpacity style={STYLES.btnPrimary}
                onPress={() => {
                    forgotPassword();
                    navigation.navigate('SignIn');
                }
                }>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }} >
                    Reset Password
                </Text>
            </TouchableOpacity>

        </View>
    )

}

export default ForgotPassword;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.5,
        elevation: 5,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container1: {
        height: 70,
        backgroundColor: 'white'
    },
    title: {
        alignSelf: 'center',
        fontSize: 45,
        marginBottom: 5,
        marginTop: 5,
        color: '#3D550C',
        borderColor: '#3D550C',
        borderRadius: 5,
        borderWidth: 5,
        paddingHorizontal: 8

    },
});