import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, TextInput, Text, SafeAreaView, StatusBar} from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fumi} from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome.js";
import {Dropdown} from "react-native-element-dropdown";

const window = Dimensions.get('window');

export function ProfileScreen({ navigation }) {
    const [password, setPassword] = useState('');
    const [genders, setGenders] = useState(null);

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const [bio, setBiography] = useState('');
    const [savesexualO1, setSaveSexualO1] = useState(0);
    const [savesexualO2, setSaveSexualO2] = useState(0);
    const [saveGender, setSaveGender] = useState(null);
    const [isSexualO1Selected, setIsSexualO1Selected] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isMalePressed, setIsMalePressed] = useState(false);
    const [isFemalePressed, setIsFemalePressed] = useState(false);
    const [isOthersPressed, setIsOthersPressed] = useState(false);
    const [gender, setGender] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const fetchGenders = async (id) => {
        try {
            const response = await fetch('http://10.52.43.27:8080/genders/get');
            const result = await response.json();
            setGenders(result.map(item => ({ id: item.id, label: item.name })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    useEffect(() => {
        fetchGenders();
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.settingView}>
                    <ThemedButton
                        name="rick"
                        type="primary"
                        backgroundDarker={'#fff'}
                        backgroundColor={'#C9D0FF'}
                        width={window.width * 0.16}
                        textColor={'#fff'}
                        textSize={20}
                        textFontFamily={'AbhayaLibre-Medium'}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('ProfilePage')}
                    >
                        <AntDesign
                            style={styles.iconDrop}
                            color={'#171C3D'}
                            name="setting"
                            size={22}
                        />
                    </ThemedButton>
                </View>

                <View style={styles.passwortInputContainer}>
                    <Fumi
                        label={"Password"}
                        iconClass={FontAwesomeIcon}
                        textAlignVertical={"top"}
                        iconName={'key'}
                        iconColor={'#1e0412'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        onChangeText={handlePasswordChange}
                        style={styles.inputs}
                        height={window.height*0.3}
                        multiline = {true}
                    />
                </View>

                <View style={styles.userDetailsContainer}>

                    <Text style={styles.header}>Username</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        multiline={true}
                    />

                    <Text style={styles.header}>Nickname</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        multiline={true}
                    />

                    <Text style={styles.header}>Biography</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        multiline={true}
                        ></TextInput>
                    <Text style={styles.header}>Biography</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        multiline={true}
                    ></TextInput>

                </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: '#171C3D',
    },

    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingView: {
        marginTop: window.height*0.1,
        backgroundColor: 'transparent',
        position: 'absolute',
        left: window.width*0.75,
    },
    userDetailsContainer: {
        width: window.width*0.9,
        marginBottom: window.height*0.0066,

    },
    passwortInputContainer: {
        alignSelf:"center",
        marginRight:window.width*0.2,
        marginTop: window.height*0.1,
        height: window.height*0.3059,
        width: window.width*0.6,
    },
    inputs: {
        borderRadius: 25,
        textAlignVertical: "top"
    },
    input: {
        height: window.height*0.20,
        margin: 12,
        borderWidth: 1,
        borderColor:"white",
        backgroundColor:"blue",
        color:"red",
        padding: 10,
        textAlignVertical: "top"
    },
    header:{
        paddingLeft: window.width*0.03,
        color:"red",
        fontWeight: "600"
    },
    dropdownFir: {
        width: window.width*0.9,
        alignSelf: "center",
        height: window.height*0.075,
        borderRadius: 50,
        paddingLeft: 30,
        textAlignVertical: "center",
        fontSize: 20,
        fontFamily: "Akshar-Light"
    },
});
