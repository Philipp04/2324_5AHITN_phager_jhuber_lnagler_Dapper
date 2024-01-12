import React, {useState} from "react";
import {ThemedButton} from "react-native-really-awesome-button";
import {Dimensions, StyleSheet, View} from "react-native";
const window = Dimensions.get('window');
const InterestButton = ({ name, id, isSelected, onChange }) => {
    const [isPressed, setIsPressed] = useState(isSelected);
    const [isInterest, setInterestPressed] = useState(false);

    const handleButtonPress = () => {
        setIsPressed(!isPressed)
        onChange(id)
    };

    const handledfs = () => {
    };



    return (
        <View style={styles.toPressContainer}>
            <ThemedButton
                style={styles.selectButton}
                name="rick"
                type="primary"
                backgroundDarker={"#0000"}
                backgroundColor={isPressed? "#806491" : "#C9D0FF"}
                width={window.width*0.4}
                textColor={"#FFF"}
                onPressedIn={handledfs}
                onPress={() => handleButtonPress()}
                activeOpacity={0.7}>
                {name}
            </ThemedButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C9D0FF",
        justifyContent: "center",
    },

    buttonParent: {
        height: window.height*0.08,
        width: window.width*0.5,
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

    selectButton: {
        marginRight: window.width*0.6,
        width: window.width*0.45,
        height: window.height*0.058,
        borderRadius: 10,
    },
    toPressContainer: {
        height:window.height*0.07,
        width: window.width*0.4,
        marginRight: window.width*0.06,
    },

});



export default InterestButton;