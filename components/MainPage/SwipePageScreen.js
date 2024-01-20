import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TextInput, TouchableOpacity, Linking, ImageBackground, Button,
} from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import LottieView from 'lottie-react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi, Hideo, Kohana, Makiko, Sae} from "react-native-textinput-effects";
import { SocialIcon } from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign.js";
import TinderCard from 'react-tinder-card'
import Swiper from "react-native-deck-swiper";

const window = Dimensions.get('window');


const db = [
    {
        name: 'Richard Hendricks',
        img: require('../../assets/images/female.png')
    },
    {
        name: 'Erlich Bachman',
        img: require('../../assets/images/female.png')
    },
]

export function SwipePageScreen({ navigation }) {

    const characters = db
    const [lastDirection, setLastDirection] = useState()
    const [isPressedSignup, setIsPressedSignUp] = useState(false);
    const [isPressedLogin, setIsPressedLogin] = useState(false);
    const [text, setText] = useState('');

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <View style={styles.background}>

            <View style={styles.cardContainer}>
                <Swiper
                    cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => {console.log(cardIndex)}}
                    onSwipedAll={() => {console.log('onSwipedAll')}}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize= {3}>
                    <Button
                        onPress={() => {console.log('oulala')}}
                        title="Press me">
                        You can press me
                    </Button>
                </Swiper>
            </View>


            <View style={styles.buttons}>
                <View style={styles.loginButtonContainer}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#fff'}
                        backgroundColor={'#C9D0FF'}
                        width={window.width * 0.15}
                        textColor={'#fff'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPressIn={() => setIsPressedLogin(true)}
                        onPressOut={() => setIsPressedLogin(false)}
                        onPress={() => navigation.navigate('Introduction')}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="setting"
                            size={22}
                        />
                    </ThemedButton>
                </View>
                <View style={styles.loginButtonContainer}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#fff'}
                        backgroundColor={'#C9D0FF'}
                        width={window.width * 0.15}
                        textColor={'#fff'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPressIn={() => setIsPressedLogin(true)}
                        onPressOut={() => setIsPressedLogin(false)}
                        onPress={() => navigation.navigate('Introduction')}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="user"
                            size={22}
                        />
                    </ThemedButton>
                </View>
                <View style={styles.loginButtonContainer}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#fff'}
                        backgroundColor={'#C9D0FF'}
                        width={window.width * 0.15}
                        textColor={'#1e0412'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPressIn={() => setIsPressedLogin(true)}
                        onPressOut={() => setIsPressedLogin(false)}
                        onPress={() => navigation.navigate('Introduction')}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="shoppingcart"
                            size={22}
                        />
                    </ThemedButton>
                </View>
                <View style={styles.loginButtonContainer}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#fff'}
                        backgroundColor={'#C9D0FF'}
                        width={window.width * 0.15}
                        textColor={'#1e0412'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPressIn={() => setIsPressedLogin(true)}
                        onPressOut={() => setIsPressedLogin(false)}
                        onPress={() => navigation.navigate('Introduction')}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="mail"
                            size={22}
                        />
                    </ThemedButton>
                </View>
                <View style={styles.loginButtonContainer}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#fff'}
                        backgroundColor={'#C9D0FF'}
                        width={window.width * 0.15}
                        textColor={'#1e0412'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPressIn={() => setIsPressedLogin(true)}
                        onPressOut={() => setIsPressedLogin(false)}
                        onPress={() => navigation.navigate('MatchPage')}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="message1"
                            size={22}
                        />
                    </ThemedButton>
                </View>

            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#171C3D',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttons: {
        flexDirection: 'row',
        top: window.height*0.35
    },

    loginButtonContainer: {
        top: window.height * 0.02,
        paddingLeft: window.width*0.01,
        paddingRight: window.width*0.01
    },

    header: {
        color: '#000',
        fontSize: 30,
        marginBottom: 30,
    },
    cardContainer: {
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        width: window.width,
        bottom: window.height*0.3
    },
    card: {
        backgroundColor: '#C9D0FF',
        width: '100%',
        alignItems: "center",
        alignSelf: "center",
        maxWidth: 250,
        height: '100%',
        maxHeight: 350,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        color: '#fff',
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    },
});
