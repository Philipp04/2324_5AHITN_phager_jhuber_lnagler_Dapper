import React, {useRef, useState} from "react";
import {
    StyleSheet, Text, View, Button, Alert, TouchableOpacity, FlatList, TouchableWithoutFeedback, Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading"
const window = Dimensions.get('window');

export function IntroductionScreen({navigation}){


    const flatListRef = useRef(null);



    const [isPressed, setIsPressed] = useState(false);
    const handleButtonPress = () => {
        setIsPressed(true);

    };

    const handleButtonRelease = () => {
        setIsPressed(false);
    };


    const data = [
        { id: '1', image: require('../assets/images/earth_loadingscreen.png'), header: 'Connect with People', text: 'Find friends anytime, any where, any situation!'},
        { id: '2', image: require('../assets/images/desktopsitter_loadingscreen.png'), header: 'Your way!', text: 'Make some friends with same interests'},
        { id: '3', image: require('../assets/images/standingunderwear_loadingscreen.png'), header: 'Find Your Duo!', text: 'To the world, you’re one person…to one person you’re the world.'},
        { id: '4', image: require('../assets/images/earth_loadingscreen.png'), header: 'Connect with People', text: 'Find friends anytime, any where, any situation!'}
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.header} >{item.header}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    const onScroll = () => {
        // Zurücksetzen auf das erste Element, wenn das Ende erreicht wird
        flatListRef.current.scrollToIndex({ animated: false, index: 0 });
    };


    return (


            <View style={styles.container}>
                <LinearGradient colors={["#29173D", "#170E28", "#010310"]} start={[0.1, 0.1]} style={styles.linearGradient}>

                    <TouchableWithoutFeedback
                        onPressIn={() => handleButtonPress()}
                        onPressOut={handleButtonRelease}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('Second')}>

                        <View style={[styles.buttonParent, isPressed && styles.pressedButton]}>
                            <LinearGradient colors={['#5be9aa', '#09949d']} style={styles.buttonGrad}>
                                <Text style={styles.buttonText}>My Button</Text>
                            </LinearGradient>
                        </View>
                    </TouchableWithoutFeedback>


                    <View style={styles.flatlist}>
                        <FlatList
                            ref={flatListRef}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled={true}
                            onEndReached={onScroll}
                            onEndReachedThreshold={0.1}
                        />
                    </View>

                </LinearGradient>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
    },


    buttonGrad: {
        height: window.height*0.08,
        width: window.width*0.5,
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        bottom: 5,
        alignSelf: 'center',
    },

    buttonParent: {
        height: window.height*0.08,
        width: window.width*0.5,
        borderRadius: 10,
        top: window.height*0.83,
        backgroundColor: '#024e51',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
        alignSelf: 'center',
    },

    pressedButton: {
        opacity: 0.5,
    },

    itemContainer: {
        width: window.width,
        alignSelf: "center",
    },

    image: {
        width: window.width*0.80,
        height: window.height*0.43,
        alignSelf: "center",
    },
    header: {
        fontSize: 24,
        paddingTop: 10,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'Akshar-Bold'
    },
    text: {
        fontSize: 18,
        paddingTop: 15,
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'Akshar-Medium',
        width: window.width * 0.8
    },

    flatlist: {
        marginBottom: 210
    }


});