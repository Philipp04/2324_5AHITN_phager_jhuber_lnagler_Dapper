import React, {useRef, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";
import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
import PaginationDots, {ExpandingDot, SlidingDot} from 'react-native-animated-pagination-dots';
import {ThemedButton} from "react-native-really-awesome-button";
import InterestButton from "./InterestButton.js";

export function SelectInterestsScreen({navigation}){


    const flatListRef = useRef(null);
    const [isPressed, setIsPressed] = useState(false);
    let sharedVar = []
    const [savedInterests, setSavedInterests] = useState(sharedVar);
    const [selectedCategory, setSelectedCategory] = useState("Sport");

    const categories = [
        { label: 'Sport', id: 1,  },
        { label: 'Food & Drinks', id: 2 },
        { label: 'Personality', id: 3 },
        { label: 'Hobby', id: 4 },
        { label: 'Video Games', id: 5 },
    ];

    const dataPage= [
        [
            { label: 'Fußball', id: 1,isSelected: false },
            { label: 'Basketball', id: 2, isSelected:false },
        ],

        [
            { label: 'Handball', id: 3, isSelected:false},
            { label: 'Volleyball', id: 4, isSelected:false},
        ],
        [
            { label: 'Völkerball', id: 5, isSelected:false},
            { label: 'Tennis', id: 6, isSelected:false},
        ],
        [
            { label: 'Golf', id: 7, isSelected:false},
            { label: 'Ski', id: 8, isSelected:false},
        ],
        [
            { label: 'Kraftsport', id: 9, isSelected:false },
            { label: 'Boxen', id: 10,isSelected:false },
        ]

    ];

    const dataSent = {
        interests: savedInterests
    };

    const dataPage2= [
        [
            { label: 'Bier', id: 11, isSelected:false},
            { label: 'Wein', id: 12, isSelected:false },
            { label: 'Spritzer', id: 13, isSelected:false },
            { label: 'Mc Donalds', id: 14,isSelected:false },
            { label: 'KFC', id: 15,isSelected:false },
        ],

        [
            { label: 'Apfel', id: 16,isSelected:false},
            { label: 'Birne', id: 17,isSelected:false},
            { label: 'Banane', id: 18,isSelected:false},
            { label: 'Orange', id: 19,isSelected:false},
            { label: 'Tomate', id: 20,isSelected:false},
        ],
        [
            { label: 'Pasta', id: 21,isSelected:false},
            { label: 'Vegan', id: 22,isSelected:false},
            { label: 'Vegetarisch', id: 23,isSelected:false},
            { label: 'Diet', id: 24,isSelected:false},
            { label: 'Bulk', id: 25,isSelected:false},
        ],
        [
            { label: 'Nüsse', id: 26,isSelected:false},
            { label: 'Allergiker', id: 27,isSelected:false},
            { label: 'Fleisch', id: 28,isSelected:false},
            { label: 'Reis', id: 29,isSelected:false},
            { label: 'Fast Food', id: 30,isSelected:false},
        ],

    ];
    const [data, setData] = useState(dataPage);



    const handleButtonPress = () => {
        setIsPressed(true);
        setSavedInterests(sharedVar)
        navigation.navigate('CreateAccount', { dataSent: dataSent });
    };

    const handleInterestChange = (id) => {
            const index = sharedVar.indexOf(id);
            console.log(index + " sd")
            if (index === -1) {
                sharedVar.push(id)
            }else {
                const x = sharedVar.splice(index, 1);
            }
    };




    const handleButtonRelease = () => {
        setIsPressed(false);
    };



    const [isFocus, setIsFocus] = useState(false);


    const nav = () =>{
            navigation.navigate('CreateAccount', { dataSent: dataSent });
    }



    const renderItem = ({ item }) => {

        const handleCategoryChange = (id) => {
            //TODO: Connect with backend

            const foundCategory = categories.find(category => category.id === id);
            setSelectedCategory(foundCategory.label)
            console.log(id)
            if (id === 1) {
                setData(dataPage)
            } else if (id === 2){
                setData(dataPage2)
            }
            sharedVar = []
        };

        return (
            <View style={styles.categoryContainer}>
        <ThemedButton
            style={styles.categoryButton}
            name="rick"
            type="primary"
            backgroundDarker={"#0000"}
            backgroundColor={"#171C3D"}
            width={window.width*0.38}
            height={window.height*0.068}
            textColor={"#C9D0FF"}
            onPressIn={() => handleButtonPress}
            onPressOut={handleButtonRelease}
            onPress={() => handleCategoryChange(item.id)}
            activeOpacity={0.7}>
            {item.label}
        </ThemedButton>
            </View>
        )
    }

    const renderItem2 = ({ item }) => {

        return (
            <InterestButton name={item.label} id={item.id} isSelected={item.isSelected} onChange={handleInterestChange} />
        )
    }

    return (
        <View style={styles.container}>
                    <View style={styles.flatlist}>
                        <FlatList
                            ref={flatListRef}
                            data={categories}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled={true}
                        />
                    </View>

                        <View style={styles.itemContainer}>
                            <ThemedButton
                                style={styles.nextButton}
                                name="rick"
                                type="primary"
                                backgroundDarker={"#0000"}
                                backgroundColor={"#ffe5e5"}
                                textColor={"#000"}
                                onPressIn={() => handleButtonPress}
                                onPressOut={handleButtonRelease}
                                activeOpacity={0.7}
                                onPress={() => nav()}>
                                Back
                            </ThemedButton>

                            <Text style={styles.header}>{selectedCategory}</Text>

                            <View style={styles.rows}>
                            <FlatList
                                ref={flatListRef}
                                data={data[0]}
                                renderItem={renderItem2}
                                keyExtractor={(item) => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                pagingEnabled={false}
                            />
                                <FlatList
                                    ref={flatListRef}
                                    data={data[1]}
                                    renderItem={renderItem2}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    pagingEnabled={false}
                                />
                                <FlatList
                                    ref={flatListRef}
                                    data={data[2]}
                                    renderItem={renderItem2}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    pagingEnabled={false}
                                />
                                <FlatList
                                    ref={flatListRef}
                                    data={data[3]}
                                    renderItem={renderItem2}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    pagingEnabled={false}
                                />
                                <FlatList
                                    ref={flatListRef}
                                    data={data[4]}
                                    renderItem={renderItem2}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    pagingEnabled={false}
                                />
                            </View>
                        </View>

            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C9D0FF",
        justifyContent: "center",
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
    },

    buttonParent: {
        height: window.height*0.08,
        width: window.width*0.5,
        borderRadius: 10,
        top: window.height*0.64,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    birthdayButton: {
        borderRadius: 10,
        top: window.height*0.09,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    nextButton: {
        borderRadius: 10,
        top: window.height*0.64,
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
        height: window.height*0.90,
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: "#171C3D",
        bottom: window.height*0.207353,
    },

    image: {
        width: window.width*0.80,
        height: window.height*0.43,
        alignSelf: "center",
    },
    header: {
        fontSize: 28,
        top: window.height*0.0132353,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'Akshar-Light'
    },
    text: {
        fontSize: 18,
        top: window.width*0.0264,
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'AbhayaLibre-SemiBold',
        width: window.width * 0.8
    },

    flatlist: {
        height: window.height*0.72,
        bottom: 190,
    },

    categoryButton: {
        borderRadius: 10,
        width:window.width*0.38,
        top: window.height*0.64,
        height: window.height*0.068,
        marginLeft: window.width*0.02,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    categoryContainer: {
        height:window.height*0.2,
        backgroundColor:"red"
    },
    rows: {
        height: window.height*0.45,
        top: window.height*0.04,
    },
    selectButton: {
        marginLeft: window.width*0.03,
        width: window.width*0.35,
        height: window.height*0.058,
        borderRadius: 10,
    },

    toPressContainer: {
        height:window.height*0.07,
        backgroundColor: "blue"
    },

});