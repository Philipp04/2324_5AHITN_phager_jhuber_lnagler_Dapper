import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fumi} from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome.js";

const window = Dimensions.get('window');

export function ProfileScreen({ navigation }) {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (text) => {
        setPassword(text);
    };


    return (
        <ScrollView
            style={styles.background}
            contentContainerStyle={styles.scrollViewContent}
        >
            <View style={styles.container}>
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

                <View style={styles.usernameInputContainer}>
                    <Fumi
                        label={"Password"}
                        iconClass={FontAwesomeIcon}
                        iconName={'key'}
                        iconColor={'#1e0412'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        onChangeText={handlePasswordChange}
                        style={styles.inputs}
                    />
                </View>
                <View style={styles.bioInputContainer}>
                    <Fumi
                        label={"Password"}
                        iconClass={FontAwesomeIcon}
                        iconName={'key'}
                        iconColor={'#1e0412'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        onChangeText={handlePasswordChange}
                        style={styles.inputs}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#171C3D',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingView: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: window.height * 0.87,
        left: window.width*0.75,
    },
    bioInputContainer: {
        height: window.height*0.1059,
        width: window.width*0.9,
        marginBottom: window.height*0.0066,
        bottom: window.height*0.04,
    },
    usernameInputContainer: {
        height: window.height*0.1059,
        width: window.width*0.6,
        bottom: window.height*0.20,
    },
    inputs: {
        borderRadius: 25
    },
});
