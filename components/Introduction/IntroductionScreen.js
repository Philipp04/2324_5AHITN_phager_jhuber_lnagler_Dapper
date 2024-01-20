import React, {useRef, useState} from "react";
import {
    StyleSheet, Text, View, Button, Alert, TouchableOpacity, FlatList, TouchableWithoutFeedback, Image, Animated
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading"
const window = Dimensions.get('window');
import PaginationDots, {ExpandingDot, SlidingDot} from 'react-native-animated-pagination-dots';
import {ThemedButton} from "react-native-really-awesome-button";

export function IntroductionScreen({navigation}){


    const flatListRef = useRef(null);

    const scrollX = React.useRef(new Animated.Value(0)).current;



    const [isPressed, setIsPressed] = useState(false);
    const handleButtonPress = () => {
        setIsPressed(true);

    };

    const handleButtonRelease = () => {
        setIsPressed(false);
    };


    const data = [
        { id: '1', image: require('../../assets/images/earth_loadingscreen.png'), header: 'Connect with People', text: 'Find friends anytime, any where, any situation!'},
        { id: '2', image: require('../../assets/images/desktopsitter_loadingscreen.png'), header: 'Your way!', text: 'Make some friends with same interests'},
        { id: '3', image: require('../../assets/images/standingunderwear_loadingscreen.png'), header: 'Find Your Duo!', text: 'To the world, you’re one person…to one person you’re the world.'},
        { id: '4', image: require('../../assets/images/earth_loadingscreen.png'), header: 'Connect with People', text: 'Find friends anytime, any where, any situation!'}
    ];

    const data2 = [
        { id: '1', image: require('../../assets/images/earth_loadingscreen.png'), header: 'Connect with People', text: 'Find friends anytime, any where, any situation!'},
        { id: '2', image: require('../../assets/images/desktopsitter_loadingscreen.png'), header: 'Your way!', text: 'Make some friends with same interests'},
        { id: '3', image: require('../../assets/images/standingunderwear_loadingscreen.png'), header: 'Find Your Duo!', text: 'Dapper: [Dap] + [per]'},
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.header} >{item.header}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    //const onScroll = () => {

      //  flatListRef.current.scrollToIndex({ animated: false, index: 0 });
    //};


    return (


            <View style={styles.container}>
                <LinearGradient colors={["#29173D", "#170E28", "#010310"]} style={styles.linearGradient}>

                    <ThemedButton
                        style={styles.buttonParent}
                        name="rick"
                        type="primary"
                        backgroundDarker={"#0000"}
                        backgroundColor={"#ffe5e5"}
                        textColor={"#000"}
                        onPressIn={() => handleButtonPress()}
                        onPressOut={handleButtonRelease}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('ChooseAction')
                    }>
                        Next
                    </ThemedButton>


                    <View style={styles.flatlist}>
                        <FlatList
                            ref={flatListRef}
                            data={data2}
                            renderItem={renderItem}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                {
                                    useNativeDriver: false,
                                }
                            )}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled={true}
                            //onEndReached={onScroll}
                            //onEndReachedThreshold={0.1}
                        />
                    </View>

                    <View style={styles.dots}>

                    <SlidingDot
                        data={data2}
                        marginHorizontal={3}
                        expandingDotWidth={30}
                        scrollX={scrollX}
                        dotSize={13}

                        dotStyle={{
                            backgroundColor: '#d3d3d3',
                            opacity: 0.4,
                        }}
                        containerStyle={{
                            position: "absolute",
                            bottom: 30,
                            flexDirection: "row",
                            alignSelf: "center"
                        }}

                        slidingIndicatorStyle={{
                            backgroundColor: '#806491',
                            zIndex: 99,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}

                        //onEndReached={onScroll}
                        //onEndReachedThreshold={0.1}
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
        paddingTop: window.height*0.0132,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'Akshar-Bold'
    },
    text: {
        fontSize: 18,
        paddingTop: window.height*0.0199,
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'AbhayaLibre-SemiBold',
        width: window.width * 0.8
    },

    flatlist: {
        marginBottom: window.height*0.264 //d
    },

    dots: {
        height: window.height*0.0397,
        width: 100,
        bottom: window.height*0.1985, //d
        alignSelf: "center",
    }

});