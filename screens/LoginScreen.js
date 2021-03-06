import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import STYLES from '../styles/styles';
import { authentication } from '../firebase/firebase-config';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { deviceHeight, deviceWidth } from '../Dimen';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState("");
  const [loggedin, setLoggedin] = React.useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re)
        Alert.alert("Success ✅", "Account logged in successfully " + email);
        setLoggedin(true);
        navigation && navigation.navigate('tabs', { screen: 'Home' });
      })
      .catch((re) => {
        console.log(re);

        if (re.code == "auth/wrong-password") {
          Alert.alert("Account login failed ❌", "Wrong Password.");
        }
        else if (re.code == "auth/user-not-found") {
          Alert.alert("Account login failed❌", "User not Found.");

        }
        else if (re.code == "auth/too-many-requests") {
          Alert.alert("Account login failed❌", "Too many Attempts done. Try after some time or reset the password.");
        }
        else {
          Alert.alert("Failed ❌", "Account login failed.");
        }

        setLoggedin(false);
      })
  }




  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>

          <Image source={require('../assets/icons/my_app.png')} style={{ width: '100%', height: 70, marginLeft: deviceWidth / 8.6 }} />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
            Welcome Back,
          </Text>
          <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.light }}>
            Sign in to continue
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} value={email} onChangeText={text => setEmail(text)} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={STYLES.btnPrimary}
            onPress={() => {
              handleLogin();
              navigation && navigation.navigate('tabs', { screen: 'Home', params: { name: authentication.currentUser?.email, id: authentication.currentUser?.uid } });
            }
            }>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }} >
              Sign In
            </Text>
          </TouchableOpacity>

          {/* <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={{ uri: 'https://img.icons8.com/color/2x/google-logo.png' }}
              />
            </View>
            <View style={{ width: 10 }}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={{ uri: 'https://img.icons8.com/color/2x/facebook-new.png' }}
              />
            </View>
          </View> */}
        </View>


        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{ color: COLORS.light, fontWeight: 'bold' }}>
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => { navigation && navigation.navigate('SignUp') }}>
            <Text style={{ color: COLORS.pink, fontWeight: 'bold' }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>

          <TouchableOpacity onPress={() => { navigation.navigate("Forgot") }}>
            <Text style={{ color: '#0645AD', fontWeight: 'bold' }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;