import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button, Image
} from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import AntDesign from "react-native-vector-icons/AntDesign.js";
import Swiper from "react-native-deck-swiper";

const window = Dimensions.get('window');


const db = [
    {
        name: 'Richard Hendrickswerwerew',
        img: require('../../assets/images/dog.png'),
        age: 12
    },
    {
        name: 'Erlich Bachman',
        img: require('../../assets/images/earth_loadingscreen.png'),
        age: 30
    },
]

export function SwipePageScreen({ navigation }) {

    const characters = db
    const [lastDirection, setLastDirection] = useState()
    const [isPressedSignup, setIsPressedSignUp] = useState(false);
    const [isPressedLogin, setIsPressedLogin] = useState(false);
    const [text, setText] = useState('');
    const swiperRef = useRef(null);
    const[diamonds, setDiamonds] = useState(10);
    const [disable, setDisable] = useState(false);
    const [cardsEnd, setCardsEnd] = useState(false);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const onSwiped=() => {
        if(diamonds === 1){
            setDisable(true);
        }
        setDiamonds(diamonds - 1);
    }

    const onSwipedButton=(text) =>{
        if(!cardsEnd && diamonds !== 0){
            if(text === "left"){
                swiperRef.current.swipeLeft();
            }
            if(text === "right"){
                swiperRef.current.swipeRight();
            }
        }
    }

    return (
        <View style={styles.background}>

            <View style={styles.cardContainer}>
                <Swiper
                    ref={swiperRef}
                    cards={db}
                    disableLeftSwipe={disable}
                    disableRightSwipe={disable}
                    disableBottomSwipe={disable}
                    disableTopSwipe={disable}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <View style={styles.cardContent}>
                                <Image
                                    source={card.img}
                                    style={styles.cardImage}
                                />
                                </View>
                                <View>
                                    <Text style={styles.cardName}>
                                        {truncateText(card.name, 18)}
                                        {'  '}
                                    </Text>
                                <Text style={styles.cardAge}>{card.age}</Text>
                                </View>
                            </View>
                        )
                    }}

                    onSwiped={() => {onSwiped()}}
                    onSwipedAll={() => {setCardsEnd(true)}}
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
                            onSwipedButton("left")
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
                        onSwipedButton("right")
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


            <View style={styles.buttonsAbove}>
                <View style={styles.diamondBackground}>
                    <Text style={styles.diamonds}>{diamonds}</Text>
                    <AntDesign
                        style={styles.iconDiamond}
                        color={'#171C3D'}
                        name="heart"
                        size={25}
                    />
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
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <AntDesign
                        style={styles.iconDrop}
                        color={'#171C3D'}
                        name="user"
                        size={22}
                    />
                </ThemedButton>
            </View>
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
                        onPress={() => navigation.navigate('FilterScreen')}
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
                        onPress={() => navigation.navigate('ProfilePage')}
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
                        onPress={() => navigation.navigate('ShopScreen')}
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
    iconDiamond:{
        paddingLeft: 15
    },

    buttons: {
        flexDirection: 'row',
        top: window.height*0.31
    },
    diamondBackground: {
        flexDirection: "row",
        width: 150,
        height: 50,
        bottom: window.height*0.35,
        left: window.width*0.30,
        backgroundColor: '#C9D0FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonsAbove: {
        flexDirection: "row",
    },
    diamonds:{
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: 'black',
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
        bottom: window.height*0.24,
    },
    card: {
        backgroundColor: '#C9D0FF',
        width: window.width*0.7,
        alignItems: "center",
        alignSelf: "center",
        maxWidth: 250,
        height: window.height*0.8,
        maxHeight: 350,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardContent:{
        top: window.height*0.01,
        height: window.height*0.38,
        width: window.width*0.63,
    },
    cardName:{
        bottom: window.height*0.02,
        right: window.width*0.04,
        fontSize: 22,
        color: "white",
    },
    cardAge:{
        bottom:window.height*0.02,
        fontSize: 22,
        color: "white",
    },
    cardImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
        bottom: window.height*0.35,
        right: window.width*0.55,
    }
});
