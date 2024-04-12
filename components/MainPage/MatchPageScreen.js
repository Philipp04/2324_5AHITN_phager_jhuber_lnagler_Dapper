import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TextInput, TouchableOpacity, Linking, ImageBackground, Button, SafeAreaView, ScrollView, Image, FlatList
} from 'react-native';


import { ThemedButton } from 'react-native-really-awesome-button';
import AntDesign from "react-native-vector-icons/AntDesign.js";

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

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
    }
    return text;
};

const CustomComponent = ({ text, color, picture, symbol }) => (
    <View style={{ padding: 13}}>
        <View style={styles.loginButtonContainer}>
            <ThemedButton
                name="rick"
                type="primary"
                backgroundDarker={'#fff'}
                backgroundColor={color}
                width={window.width * 0.88}
                height={window.height*0.095}
                textColor={'#1e0412'}
                textSize={20}
                textFontFamily={'AbhayaLibre-Medium'}
                activeOpacity={0.7}
            >
                <View style={styles.matchItems}>
                <Image
                    source={picture}
                    style={{
                        width: window.width*0.08,
                        height: window.height*0.0635,
                }}
                />
                </View>
                <View style={styles.matchItems2}>
                    <Text style={styles.name}>
                        {truncateText(text, 18)}
                        {'  '}
                        18
                    </Text>
                </View>
                <View style={styles.matchItems3}>
                    <AntDesign
                        style={styles.iconDrop}
                        color={'#171C3D'}
                        name={symbol}
                        size={26}
                    />
                </View>
            </ThemedButton>
        </View>
    </View>
);

export function MatchPageScreen({ navigation }) {

    const [dataArray, setDataArray] = useState([
        { id: 1, text: 'Sarah Müller', color: '#00D7E4',picture: require('../../assets/images/female.png'), symbol: "bulb1" },
        { id: 2, text: 'Julia Huber', color: '#C9D0FF', picture: require('../../assets/images/female.png'), symbol: "check" },
        { id: 3, text: 'Lucy Nagler', color: '#00D7E4',picture: require('../../assets/images/female.png'), symbol: "bulb1" },
        { id: 4, text: 'Philippa Hager', color: '#C9D0FF', picture: require('../../assets/images/female.png'), symbol: "check" },
        { id: 5, text: 'Eline Miklautsch', color: '#00D7E4',picture: require('../../assets/images/female.png'), symbol: "bulb1" },
        { id: 6, text: 'Daniela Wimmer', color: '#C9D0FF', picture: require('../../assets/images/female.png'), symbol: "check" },
        { id: 7, text: 'Manuela Rester', color: '#00D7E4',picture: require('../../assets/images/female.png'), symbol: "bulb1" },
        { id: 8, text: 'Nicole Mekina', color: '#C9D0FF', picture: require('../../assets/images/female.png'), symbol: "check" },
        { id: 9, text: 'Stephanie Prechtl', color: '#C9D0FF', picture: require('../../assets/images/female.png'), symbol: "check" },
    ]);

    const addNewComponent = () => {
        const newId = dataArray.length + 1;
        const newText = `Komponente ${newId}`;
        setDataArray([...dataArray, { id: newId, text: newText }]);
    };


    return (
        <View style={styles.background}>
                <Text style={styles.matchesText}>Matches</Text>
            <View style={styles.flatlist}>
            <FlatList
                style={styles.containerView}
                data={dataArray}
                height={10}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CustomComponent key={item.id} text={item.text} color={item.color} picture={item.picture} symbol={item.symbol} />
                )}
            />
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
    matchesText: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        fontSize: 25,
        top: window.height*0.085,
        fontFamily: 'Akshar-Bold',
        color: "#fff"
    },
    containerView: {
        top:window.height*0.09,
        height: window.height * 0.24,
    },
    matchItems: {
        flexDirection: "row",
        right: window.width*0.015
    },
    name: {
        fontSize: 18,
        fontFamily: 'Akshar-Bold',
        color: "#fff"
    },
    matchItems2: {
        left: window.width*0.01,
        width: window.width*0.62,
    },

    matchItems3: {
        flexDirection: 'row',
        right: window.width*0.005
    },
    containerViewer:{
        height: window.height*0.97,
    },
    flatlist: {
        marginBottom: 6
    }
});
