import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button, Image, Linking
} from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import AntDesign from "react-native-vector-icons/AntDesign.js";
import Swiper from "react-native-deck-swiper";

const window = Dimensions.get('window');



export function ShopPageScreen({ navigation }) {

    const handleIconPress = (url) => {
        Linking.openURL(url).then(() => {
            console.log('URL erfolgreich geöffnet');
        }).catch((err) => {
            console.error('Fehler beim Öffnen der URL', err);
        });
    };
    return (
        <View style={styles.background}>
                <View style={styles.title}>
                    <Text style={styles.shopTitle}>Shop</Text>
                </View>

            <View style={styles.firstButtonLine}>
                <ThemedButton
                name="rick"
                type="primary"
                backgroundDarker={'#fff'}
                backgroundColor={'#C9D0FF'}
                width={window.width * 0.40}
                height={window.height*0.22}
                textColor={'#1e0412'}
                textSize={20}
                style={styles.button}
                textFontFamily={'AbhayaLibre-Medium'}
                activeOpacity={0.7}
                onPress={() => handleIconPress('https://www.youtube.com/watch?v=dQw4w9WgXcQ' )}
            >
                <View style={styles.matchItems}>
                    <Text style={styles.adText}>Ad</Text>
                    <Image
                        source={require('../../assets/images/watchadd.png')}
                        style={{
                            width: window.width*0.28,
                            height: window.height*0.1535,
                            resizeMode: 'contain',
                            alignSelf: "center"
                        }}
                    />
                </View>
            </ThemedButton>

                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundDarker={'#fff'}
                    backgroundColor={'#C9D0FF'}
                    width={window.width * 0.40}
                    height={window.height*0.22}
                    textColor={'#1e0412'}
                    textSize={20}
                    textFontFamily={'AbhayaLibre-Medium'}
                    activeOpacity={0.7}
                    onPress={() => handleIconPress('https://philipphager.com' )}
                >
                    <View style={styles.matchItems}>
                        <Text style={styles.adText}>1 Month</Text>
                        <Image
                            source={require('../../assets/images/PremiumSubscription.png')}
                            style={{
                                width: window.width*0.28,
                                height: window.height*0.1535,
                                resizeMode: 'contain',
                            }}
                        />
                    </View>
                </ThemedButton>

        </View>

            <View style={styles.secondButtonLine}>
                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundDarker={'#fff'}
                    backgroundColor={'#C9D0FF'}
                    width={window.width * 0.90}
                    height={window.height*0.175}
                    textColor={'#1e0412'}
                    textSize={20}
                    style={styles.button2}
                    textFontFamily={'AbhayaLibre-Medium'}
                    activeOpacity={0.7}
                    onPress={() => handleIconPress('https://www.youtube.com/watch?v=dQw4w9WgXcQ' )}
                >
                    <View style={styles.Items}>
                        <Image
                            source={require('../../assets/images/PremiumSubscription.png')}
                            style={{
                                width: window.width*0.28,
                                height: window.height*0.1535,
                                resizeMode: 'contain',
                                alignSelf: "center",
                                marginRight: 20
                            }}
                        />
                        <View style={styles.texts}>
                            <Text style={styles.adText2}>Subscription</Text>
                            <Text style={styles.adText2}>3 Month</Text>
                            <Text style={styles.adText2}>3€</Text>
                        </View>
                    </View>
                </ThemedButton>
        </View>

            <View style={styles.thirdButtonLine}>
                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundDarker={'#fff'}
                    backgroundColor={'#C9D0FF'}
                    width={window.width * 0.90}
                    height={window.height*0.175}
                    textColor={'#1e0412'}
                    textSize={20}
                    style={styles.button2}
                    textFontFamily={'AbhayaLibre-Medium'}
                    activeOpacity={0.7}
                    onPress={() => handleIconPress('https://www.youtube.com/watch?v=dQw4w9WgXcQ' )}
                >
                    <View style={styles.Items}>
                        <Image
                            source={require('../../assets/images/invitation.png')}
                            style={{
                                width: window.width*0.28,
                                height: window.height*0.1535,
                                resizeMode: 'contain',
                                alignSelf: "center",
                                marginRight: 20
                            }}
                        />
                        <View style={styles.texts}>
                            <Text style={styles.adText2}>Invite friends</Text>
                            <Text style={styles.adText2}>get</Text>
                            <Text style={styles.adText2}>diamonds</Text>
                        </View>
                    </View>
                </ThemedButton>
            </View>
            <View style={styles.fourthButtonLine}>
                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundDarker={'#fff'}
                    backgroundColor={'#C9D0FF'}
                    width={window.width * 0.90}
                    height={window.height*0.175}
                    textColor={'#1e0412'}
                    textSize={20}
                    style={styles.button2}
                    textFontFamily={'AbhayaLibre-Medium'}
                    activeOpacity={0.7}
                    onPress={() => handleIconPress('https://www.youtube.com/watch?v=dQw4w9WgXcQ' )}
                >
                    <View style={styles.Items}>
                        <Image
                            source={require('../../assets/images/googleplay.png')}
                            style={{
                                width: window.width*0.28,
                                height: window.height*0.1035,
                                resizeMode: 'contain',
                                alignSelf: "center",
                                marginRight: 20
                            }}
                        />
                        <View style={styles.texts}>
                            <Text style={styles.adText2}>Rate Dapper</Text>
                            <Text style={styles.adText2}>5 stars</Text>
                        </View>
                    </View>
                </ThemedButton>
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
    button: {
      marginRight: 20,
    },
    button2: {
        alignSelf: "center"
    },
    iconDiamond:{
        paddingLeft: 15
    },
    Items:{
        flexDirection: "row",
    },

    buttons: {
        flexDirection: 'row',
        top: window.height*0.31
    },
    title: {
        flexDirection: "row",
        width: 150,
        height: 50,
        bottom: window.height*0.04,
        right: window.width*0.25,
        backgroundColor: '#C9D0FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    firstButtonLine: {
        bottom: window.height*0.01,
        alignSelf: "center",
        flexDirection: "row",
    },
    secondButtonLine: {
        top: window.height*0.015,
        alignSelf: "center",
        flexDirection: "row",
    },
    thirdButtonLine: {
        top: window.height*0.0355,
        alignSelf: "center",
        flexDirection: "row",
    },
    fourthButtonLine: {
        top: window.height*0.06,
        alignSelf: "center",
        flexDirection: "row",
    },
    shopTitle:{
        fontSize: 18,
        color: 'black',
    },

    loginButtonContainer: {
        top: window.height * 0.04,
        paddingLeft: window.width*0.01,
        paddingRight: window.width*0.01
    },

    adText: {
      alignSelf: "center",
        fontSize: 15,
        paddingBottom: window.height*0.001,
    },
    adText2: {
        alignSelf: "center",
        fontSize: 23,
        fontWeight: "bold",
        paddingBottom: window.height*0.001,
    },

    header: {
        color: '#000',
        fontSize: 30,
        marginBottom: 30,
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    },
});
