import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button
} from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import AntDesign from "react-native-vector-icons/AntDesign.js";
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
    const swiperRef = useRef(null);

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
                    ref={swiperRef}
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
                    stackSize= {6}>
                </Swiper>
            </View>

            <View style={styles.likes}>
                <View style={styles.dislike}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#fff'}
                        backgroundColor={'#FF7F7F'}
                        width={window.width * 0.25}
                        textColor={'#fff'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPressIn={() => {
                            swiperRef.current.swipeLeft();
                        }}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="close"
                            size={22}
                        />
                    </ThemedButton>
                </View>

            <View style={styles.like}>
                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundDarker={'#fff'}
                    backgroundColor={'#7FFF7F'}
                    width={window.width * 0.25}
                    textColor={'#fff'}
                    textSize={20}
                    textFontFamily={'AbhayaLibre-Medium'}
                    activeOpacity={0.7}
                    onPressIn={() => {
                        swiperRef.current.swipeRight();
                    }}
                >
                    <AntDesign
                        style={styles.iconDrop}
                        color={'#171C3D'}
                        name="heart"
                        size={22}
                    />
                </ThemedButton>
            </View>
            </View>


            <View style={styles.profileButton}>
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
                    onPress={() => navigation.navigate('ProfilePage')}
                >
                    <AntDesign
                        style={styles.iconDrop}
                        color={'#171C3D'}
                        name="user"
                        size={22}
                    />
                </ThemedButton>
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
                            name="filter"
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
                        onPress={() => navigation.navigate('ProfileScreen')}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="Trophy"
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
        top: window.height*0.30
    },

    loginButtonContainer: {
        top: window.height * 0.04,
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
        bottom: window.height*0.28,
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
    like: {
        marginLeft: window.width*0.05,
    },
    dislike: {
        marginRight: window.width*0.05,
    },
    likes: {
        top: window.height*0.36,
        flexDirection: 'row',
    },
    profileButton: {
        bottom: window.height*0.39,
        right: window.width*0.34,
    }
});
