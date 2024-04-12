import React, {useEffect, useRef, useState} from 'react';
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
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {Dropdown} from "react-native-element-dropdown";

const window = Dimensions.get('window');



export function FilterScreen({ navigation }) {

    const [femaleFilter, setFemaleFilter] = useState(false);
    const [maleFilter, setMaleFilter] = useState(false);
    const [anyoneFilter, setAnyoneFilter] = useState(false);
    const [ageMinFilter, setAgeMinFilter] = useState(20);
    const [ageMaxFilter, setAgeMaxFilter] = useState(25);
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState(null);
    const [genderSend, setGenderSend] = useState(0)

    useEffect(() => {
        fetchCountries();
    }, []);


    const fetchCountries = async () => {
        try {
            const response = await fetch('http://10.52.43.27:8080/country/get');
            const result = await response.json();
            setCountries(result.map(item => ({ id: item.id, name: item.name })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const handleIconPress = (url) => {
        Linking.openURL(url).then(() => {
            console.log('URL erfolgreich geöffnet');
        }).catch((err) => {
            console.error('Fehler beim Öffnen der URL', err);
        });
    };

    const genderSelected = (gender) => {
        setFemaleFilter(false)
        setMaleFilter(false)
        setAnyoneFilter(false)
        if(gender === "male"){
            setMaleFilter(true)
            setGenderSend(1)
        }else if(gender === "female"){
            setFemaleFilter(true)
            setGenderSend(2)
        }else if (gender === "anyone"){
            setAnyoneFilter(true)
            setGenderSend(3)
        }
    }

    const postData = {
        gender: genderSend, // Integer( 1 = Male, 2 = Female, 3 = Anyone )
        ageMin: ageMinFilter, // Integer
        ageMax: ageMaxFilter, // Integer
        country: country, // Integer (ID), null = alle Länder
    };

    const updateAgeFilters = (value) => {
        setAgeMinFilter(value[0])
        setAgeMaxFilter(value[1])
    }

    const sendFilters = () =>{
        console.log(postData)
        navigation.navigate("SwipePage")
    }

    return (
        <View style={styles.background}>
                <View style={styles.title}>
                    <Text style={styles.shopTitle}>Filter</Text>
                </View>

            <View style={styles.firstButtonLine}>
                <ThemedButton
                name="rick"
                type="primary"
                backgroundDarker={'#fff'}
                backgroundColor={ maleFilter ? "#806491" : "#C9D0FF"}
                width={window.width * 0.27}
                height={window.height*0.15}
                textColor={'#1e0412'}
                textSize={20}
                style={styles.button}
                textFontFamily={'AbhayaLibre-Medium'}
                activeOpacity={0.7}
                onPress={() => genderSelected("male")}
            >
                <View style={styles.matchItems}>
                    <Text style={styles.adText}>Male</Text>
                </View>
            </ThemedButton>

                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundDarker={'#fff'}
                    backgroundColor={ femaleFilter ? "#806491" : "#C9D0FF"}
                    width={window.width * 0.27}
                    height={window.height*0.15}
                    textColor={'#1e0412'}
                    textSize={20}
                    style={styles.button}
                    textFontFamily={'AbhayaLibre-Medium'}
                    activeOpacity={0.7}
                    onPress={() => genderSelected("female")}
                >
                    <View style={styles.matchItems}>
                        <Text style={styles.adText}>Female</Text>
                    </View>
                </ThemedButton>

                <ThemedButton
                    name="rick"
                    type="primary"
                    backgroundColor={ anyoneFilter ? "#806491" : "#C9D0FF"}
                    backgroundDarker={'#fff'}
                    width={window.width * 0.27}
                    height={window.height*0.15}
                    textColor={'#1e0412'}
                    textSize={20}
                    style={styles.button}
                    textFontFamily={'AbhayaLibre-Medium'}
                    activeOpacity={0.7}
                    onPress={() => genderSelected("anyone")}
                >
                    <View style={styles.matchItems}>
                        <Text style={styles.adText}>Anyone</Text>
                    </View>
                </ThemedButton>

        </View>

            <View style={styles.secondButtonLine}>
                <MultiSlider
                    enableLabel={true}
                    isMarkersSeparated={true}
                    sliderLength={300}
                    values={[ageMinFilter, ageMaxFilter]}
                    min={14}
                    max={64}
                    step={1}
                    onValuesChange={(value) => {updateAgeFilters(value)}}
                />

                <Text></Text>
        </View>

            <View style={styles.thirdButtonLine}>
                <Dropdown
                    style={[styles.dropdownFir, {backgroundColor: isCountrySelected ? "#806491" : "#C9D0FF" } ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    containerStyle={styles.inputStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    data={countries}
                    maxHeight={300}
                    mode={"modal"}
                    labelField="name"
                    valueField="id"
                    backgroundColor={""}
                    placeholder="Select your Country"
                    activeColor={'#806491'}
                    value={country}
                    renderRightIcon={() => (
                        <AntDesign
                            style={styles.iconDrop}
                            name="arrowdown"
                            size={22}
                        />
                    )}
                    onChange={item => {
                        setCountry(item.id)
                    }}
                />
            </View>
            <View style={styles.fourthButtonLine}>
                <ThemedButton
                    style={styles.nextButton}
                    name="rick"
                    type="primary"
                    backgroundDarker={"#0000"}
                    backgroundColor={"#ffe5e5"}
                    textColor={"#000"}
                    activeOpacity={0.7}
                    onPress={() => sendFilters()}>
                    Filter
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
        alignSelf: "center",
        marginHorizontal: 10
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
        bottom: window.height*0.21,
        right: window.width*0.25,
        backgroundColor: '#C9D0FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    firstButtonLine: {
        bottom: window.height*0.17,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        width: window.width
    },
    secondButtonLine: {
        bottom: window.height*0.08,
        alignSelf: "center",
        flexDirection: "row",
    },
    thirdButtonLine: {
        bottom: window.height*0.0955,
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
    dropdownFir: {
        top: window.height*0.065,
        width: window.width*0.9,
        alignSelf: "center",
        height: window.height*0.075,
        borderRadius: 50,
        paddingLeft: 30,
        textAlignVertical: "center",
        fontSize: 20,
        fontFamily: "Akshar-Light"
    },
    placeholderStyle: {
        fontFamily: "Akshar-Light",
    },

    selectedTextStyle: {
        fontFamily: "Akshar-Light"
    },
    inputSearchStyle: {
        borderRadius: 50,
        height: 40,
        fontSize: 16,
    },
    inputStyle:{
        backgroundColor: "#C9D0FF",
        borderRadius: 30,
        width: window.width*0.9,
        height: window.height*0.6,
    },
    nextButton: {
        borderRadius: 10,
        top: window.height*0.15,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    itemContainerStyle:{
        borderRadius: 50,
        left: 20,
        width: window.width*0.8
    },
    itemTextStyle:{
        width: window.width*0.4,
    },

    iconDrop: {
        paddingRight: 10
    },
    iconDrop2: {
        left: window.width*0.18,
    },
    countrycontainer: {
        top: window.height*0.02,
        height: window.height*0.2,
    },
});
