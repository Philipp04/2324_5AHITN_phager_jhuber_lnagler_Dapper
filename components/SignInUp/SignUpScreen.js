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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from "react-native-textinput-effects";
import { SocialIcon } from 'react-native-elements';
import {CheckBox} from "@rneui/themed";

const window = Dimensions.get('window');



export function SignUpScreen({ navigation }) {
    const [isPressedSignup, setIsPressedSignUp] = useState(false);
    const [isPressedLogin, setIsPressedLogin] = useState(false);
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [check1, setCheck1] = useState(false);


    const socialIcons: SocialIcon[] = [
        { socialmedia: 'facebook', url: 'https://www.facebook.com/' },
        { socialmedia: 'snapchat', url: 'https://www.snapchat.com/' },
        { socialmedia: 'google', url: 'https://www.google.com/' },
        { socialmedia: 'twitter', url: 'https://www.twitter.com/' },
    ];

    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleConfirmChange = (text) => {
        setConfirmPassword(text);
    };

    const dataSent = {
        email: email,
        password: password,
        terms: check1,
    };

    const nav = () =>{
        if(password === confirmPassword && password !== "" && confirmPassword !== "" && email !== ""){
            navigation.navigate('CreateAccount', { dataSent: dataSent });
        }
    }





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

            <View style={styles.texts}>
                <Text style={styles.header1}>Create Account</Text>
                <Text style={styles.subheader}>Connect with new people today!</Text>
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
                    style={styles.input2}
                    onChangeText={handleEmailChange}
                />

            </View>

            <View style={styles.passwordInputContainer}>
                <Fumi
                    label={'Password'}
                    iconClass={FontAwesomeIcon}
                    iconName={'key'}
                    iconColor={'#1e0412'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    style={styles.input2}
                    secureTextEntry={true}
                    onChangeText={handlePasswordChange}
                />
            </View>

            <View style={styles.confirmpasswordInputContainer}>
                <Fumi
                    label={'Confirm Password'}
                    iconClass={FontAwesomeIcon}
                    iconName={'key'}
                    iconColor={'#1e0412'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    style={styles.input2}
                    secureTextEntry={true}
                    onChangeText={handleConfirmChange}
                />
            </View>

            <View style={styles.checkbox}>
                <CheckBox
                    title="I agree to the terms and conditions"
                    checked={check1}
                    size={34}
                    onPress={() => setCheck1(!check1)}
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
                        backgroundDarker={"#1e0412"}
                        backgroundColor={"#171C3D"}
                        width={window.width*0.7}
                        textColor={"#fff"}
                        textSize={20}
                        textFontFamily={"AbhayaLibre-Medium"}
                        onPressIn={() => setIsPressedSignUp(true)}
                        onPressOut={() => setIsPressedSignUp(false)}
                        activeOpacity={0.7}
                        onPress={() => nav()
                        }>
                        Sign Up

                    </ThemedButton>
                </View>
            </View>

            <View style={styles.subtext}>

                <Text style={styles.alreadyaccount}>Already have an Account? </Text>

                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.login}>Log In</Text>
                </TouchableOpacity>

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
        height: 80,
        marginBottom: 5,
        width: window.width,
        bottom: window.height*0.040,
    },

    passwordInputContainer: {
        height: 80,
        width: window.width,
        marginBottom: 5,
        bottom: window.height*0.020,
    },

    confirmpasswordInputContainer: {
        height: 80,
        width: window.width,
        marginBottom: 5,
    },


    buttons: {
        marginTop: 20,
        alignItems: 'center',
    },

    loginButtonContainer: {
        top: window.height * 0.043,
        width: window.width,
        alignItems: 'center',
    },

    socialIconView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: "center",
        width: window.width,
        marginBottom: 10,
        top: window.height*0.058,

    },

    socialIcon: {
        width: window.width*0.13,

    },
    texts: {
        width: window.width,
        height: window.height* 0.2,
        bottom: window.height*0.08,
        left: window.width*0.02
    },
    header1: {
        top: window.height*0.09,
        fontSize: 30,
        fontFamily: 'Akshar-Medium'
    },
    subheader: {
        top: window.height*0.095,
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        left: window.width*0.01,
        color: "#959AA1"
    },
    input2: {
        fontSize: 16,
        width: window.width*0.8,
    },
    subtext: {
        top: window.height*0.05,
        flexDirection: 'row',
    },
    alreadyaccount: {
        fontSize: 15,
        color: "#959AA1",
        fontFamily: 'Poppins-Regular',
    },

    login: {
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        color: "#171C3D",
    },
    checkbox: {
        top: window.height*0.01,
        alignSelf: "flex-start",
    }


});
