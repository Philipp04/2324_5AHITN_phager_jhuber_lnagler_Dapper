import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import AwesomeButton, {ThemedButton} from "react-native-really-awesome-button";


const window = Dimensions.get('window');
export function ChooseActionScreen( {navigation} ){

    const [isPressedSignup, setIsPressedSignUp] = useState(false);
    const [isPressedLogin, setIsPressedLogin] = useState(false);



    return (

        <View style={styles.background}>

            <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/robothello_welcome.png')} style={styles.image} />
            </View>

            <View>
                <Text style={styles.header}>Welcome to Lube</Text>
            </View>

            <View style={styles.texts}>
                <Text style={styles.text}>Finding a friend should be simple and fun.</Text>
                <Text style={styles.text}>There is someone for everyone.</Text>
            </View>


            <View style={styles.buttons}>

            <View style={styles.signupButtonContainer}>
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
                        onPress={() => navigation.navigate('SignUp')
                    }>
                        Sign Up

                        </ThemedButton>
                </View>

            <View style={styles.loginButtonContainer}>
                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundDarker={"#1e0412"}
                    backgroundColor={"#ffe5e5"}
                    width={window.width*0.7}
                    textColor={"#1e0412"}
                    textSize={20}
                    textFontFamily={"AbhayaLibre-Medium"}

                activeOpacity={0.7}
                onPressIn={() => setIsPressedLogin(true)}
                onPressOut={() => setIsPressedLogin(false)}
                onPress={() => navigation.navigate('SignIn')
                }>
                    Sign In

                </ThemedButton>
            </View>

            </View>

        </View>



    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },

    imageContainer: {
       // backgroundColor: "#F23",
        width: window.width,
        height: window.height*0.48,
        alignItems: "center",
        marginTop: 35
    },

    image: {
        width: window.width*0.48,
        height: window.height*0.48,
    },

    buttonParentLogin: {
        height: window.height*0.07,
        width: window.width*0.8,
        borderRadius: 24,
        backgroundColor: '#ffe5e5',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonParentSignUp: {
        height: window.height*0.07,
        width: window.width*0.8,
        borderRadius: 24,
        backgroundColor: '#171C3D',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
    },

    pressedButton: {
        opacity: 0.5,
    },

    signupButtonContainer: {
        width: window.width,
        alignItems: "center"
    },

    loginButtonContainer: {
        marginTop: 30,
        width: window.width,
        alignItems: "center"
    },

    buttons: {
        marginTop:45
    },

    header: {
        fontSize: 24,
        paddingTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: 'Akshar-Bold'
    },
    text: {
        fontSize: 18,
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: 'AbhayaLibre-Medium',
        width: window.width
    },


});

