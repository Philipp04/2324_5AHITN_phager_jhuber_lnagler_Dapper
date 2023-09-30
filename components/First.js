import React, {useState} from "react";
import {StyleSheet, Text, View, Button, Alert, TouchableOpacity, FlatList, TouchableWithoutFeedback
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';
const window = Dimensions.get('window')

export default function First(){


    const [isPressed, setIsPressed] = useState(false);
    const handleButtonPress = () => {
        setIsPressed(true);

    };

    const handleButtonRelease = () => {
        setIsPressed(false);
    };


    const data = [
        { id: '1', text: 'Element 1' },
        { id: '2', text: 'Element 2' },
        { id: '3', text: 'Element 3' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );


    return (
        <View style={styles.container}>
            <LinearGradient colors={["#29173D", "#170E28", "#010310"]} start={[0.1, 0.1]} style={styles.linearGradient}>

                <TouchableWithoutFeedback onPressIn={() => handleButtonPress()} onPressOut={handleButtonRelease} activeOpacity={0.7}>
                    <View style={[styles.buttonParent, isPressed && styles.pressedButton]}>
                        <LinearGradient
                            colors={['#5be9aa', '#09949d']}
                            style={styles.buttonGrad}>
                            <Text style={styles.buttonText}>My Button</Text>
                        </LinearGradient>
                    </View>
                </TouchableWithoutFeedback>

                <View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        pagingEnabled={true}
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
        top: window.height*0.38,
        backgroundColor: '#024e51',
        alignSelf: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        color: 'white',
        fontSize: 14,
        alignSelf: 'center',
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        borderRadius: 10,
        width: window.width,
        flex: 1
    },

    pressedButton: {
        opacity: 0.5,
    },

});