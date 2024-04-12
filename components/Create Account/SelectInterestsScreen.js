import React, {useEffect, useRef, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";
import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
import {ThemedButton} from "react-native-really-awesome-button";
import InterestButton from "./InterestButton.js";

export function SelectInterestsScreen({navigation}){
    const initialCategoriesState = [
        {
            id: 0,
            label: 'Category 1',
            interests: [  {
                id: 0,
                label: "1"
            }]
        },
        {
            id: 1,
            label: 'Category 2',
            interests: [  {
                id: 0,
                label: "1"
            }]
        },
        {
            id: 2,
            label: 'Category 3',
            interests: [  {
                id: 0,
                label: "1"
            }]
        },
        {
            id: 3,
            label: 'Category 4',
            interests: [  {
                id: 0,
                label: "1"
            }]
        },
        {
            id: 4,
            label: 'Category 5',
            interests: [
                {
                    id: 0,
                    label: "1"
                }
            ]
        },
        {
            id: 5,
            label: 'Category 6',
            interests: [
                {
                    id: 0,
                    label: "1"
                }
            ]
        },
        {
            id: 6,
            label: 'Category 7',
            interests: [
                {
                    id: 0,
                    label: "1"
                }
            ]
        },
        {
            id: 7,
            label: 'Category 8',
            interests: [
                {
                    id: 0,
                    label: "1"
                }
            ]
        },

    ];


    const flatListRef = useRef(null);
    const [isPressed, setIsPressed] = useState(false);
    let sharedVar = []
    const [savedInterests, setSavedInterests] = useState(sharedVar);
    const [selectedCategory, setSelectedCategory] = useState("Sport");
    const [categories, setCategories] = new useState(initialCategoriesState)


    const fetchCategories = async (id) => {
        try {
            const response = await fetch('http://10.52.43.27:8080/category/get');
            const result = await response.json();
            setCategories(
                result.map(item => ({
                    id: item.id,
                    label: item.name,
                    interests: item.interests.map(interest => ({
                        id: interest.id,
                        label: interest.name
                    }))
                }))
            );

        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    useEffect(() => {
        fetchCategories()
    }, []);


    const dataSent = {
        interests: savedInterests
    };

    const [data, setData] = useState([]);





    const handleButtonPress = () => {
        setIsPressed(true);
        setSavedInterests(sharedVar)
        navigation.navigate('CreateAccount', { dataSent: dataSent });
    };

    const handleInterestChange = (id) => {
            const index = sharedVar.indexOf(id);
            console.log(index + " sd")
            console.log(id)
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

    const handleCategoryChange = (id) => {
        const startDate = new Date();
        const categoryMap = new Map(categories.map(category => [category.id, category]));
        const foundCategory = categoryMap.get(id);
        setSelectedCategory(foundCategory.label)
        const chunkSize = foundCategory.interests.length/4;
        let array = 0;
        let first = []
        const endDate = new Date();

        for (let i = 0; i < foundCategory.interests.length; i += chunkSize) {
            const chunk = foundCategory.interests.slice(i, i + chunkSize);
            first.push(chunk);
        }

        setData(first);

        sharedVar = []

        console.log(endDate - startDate);
    };


    const renderItem = ({ item }) => {
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
            <InterestButton name={item.label} id={item.id} onChange={handleInterestChange} />
        )
    }

    return (
        <View style={styles.container}>
                    <View style={styles.flatlist}>
                        <FlatList
                            ref={flatListRef}
                            data={categories}
                            renderItem={renderItem}
                            keyExtractor={categories.id}
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