import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TextInput, TouchableOpacity, Linking,
} from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import LottieView from 'lottie-react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi, Hideo, Kohana, Makiko, Sae} from "react-native-textinput-effects";
import { SocialIcon } from 'react-native-elements';

const window = Dimensions.get('window');



export function SignInScreen({ navigation }) {
    const [isPressedSignup, setIsPressedSignUp] = useState(false);
    const [isPressedLogin, setIsPressedLogin] = useState(false);
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handlePasswordChange = (text) => {
            setPassword(text);
    };
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const postData = {
        email: email,
        password: password,
    };

    const fetchData = () => {
        navigation.navigate('SwipePage');
        console.log('Request Body:', JSON.stringify(postData));

        fetch('http://10.52.43.27:8080/api/v1/user/signin', {
            method: 'POST',
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('POST request successful:', data);
                navigation.navigate('SwipePage');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const socialIcons: SocialIcon[] = [
        { socialmedia: 'facebook', url: 'https://www.facebook.com/' },
        { socialmedia: 'snapchat', url: 'https://www.snapchat.com/' },
        { socialmedia: 'google', url: 'https://www.google.com/' },
        { socialmedia: 'twitter', url: 'https://www.twitter.com/' },
    ];
    const handleSocialIconPress = (url) => {
        Linking.openURL(url).then(() => {
            console.log('URL erfolgreich geöffnet');
        }).catch((err) => {
            console.error('Fehler beim Öffnen der URL', err);
        });
    };


    return (
        <KeyboardAvoidingView
            style={styles.background}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <View style={styles.loginGifView}>
                <LottieView
                    style={styles.loginGifStyle}
                    source={require('../../assets/images/login.json')} // Replace with the path to your Lottie animation file
                    autoPlay // Set autoPlay to true for autoplay
                    loop // Set loop to true for looping
                />
            </View>


            <View style={styles.emailInputContainer}>
                <Fumi
                    label={'Email'}
                    iconClass={FontAwesomeIcon}
                    iconName={'envelope'}
                    iconColor={'#1e0412'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={handleEmailChange}
                />

            </View>

            <View style={styles.passwordInputContainer}>
                <Fumi
                    label={"Password"}
                    iconClass={FontAwesomeIcon}
                    iconName={'key'}
                    secureTextEntry={true}
                    iconColor={'#1e0412'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={handlePasswordChange}
                />
            </View>

            <View style={styles.socialIconView}>
                {socialIcons.map((socialIcon, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleSocialIconPress(socialIcon.url)}
                    >
                        <SocialIcon type={socialIcon.socialmedia} style={styles.socialIcon} />
                    </TouchableOpacity>
                ))}
            </View>



            <View style={styles.buttons}>
                <View style={styles.loginButtonContainer}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#1e0412'}
                        backgroundColor={'#ffe5e5'}
                        width={window.width * 0.7}
                        textColor={'#1e0412'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPressIn={() => setIsPressedLogin(true)}
                        onPressOut={() => setIsPressedLogin(false)}
                        onPress={() => fetchData()}
                    >
                        Sign In
                    </ThemedButton>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    emailInputContainer: {
        height: window.height*0.1059,
        width: window.width,
        bottom: window.height*0.06,
    },

    passwordInputContainer: {
        height: window.height*0.1059,
        width: window.width,
        marginBottom: window.height*0.0066,
        bottom: window.height*0.04,
    },

    buttons: {
        marginTop: window.height* 0.0265,
        alignItems: 'center',
    },

    loginButtonContainer: {
        top: window.height * 0.02,
        width: window.width,
        alignItems: 'center',
    },

    loginGifView: {
        height: window.height*0.4,
        width: window.width,
        bottom: window.height*0.07,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    loginGifStyle: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: window.width*0.8
    },

    socialIconView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: "center",
        width: window.width,
        marginBottom: window.height * 0.0132,
        top: window.height*0.03,

    },

    socialIcon: {
        width: window.width*0.13,
        alignSelf: "center",

    }

});
