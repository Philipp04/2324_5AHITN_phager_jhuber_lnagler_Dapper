import * as React from 'react';
import {IntroductionScreen} from "./Introduction/IntroductionScreen.js";
import {ChooseActionScreen} from "./Introduction/ChooseActionScreen.js";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useFonts} from "expo-font";
import {SignInScreen} from "./SignInUp/SignInScreen.js";
import {SignUpScreen} from "./SignInUp/SignUpScreen.js";
import {CreateAccountScreen} from "./Create Account/CreateAccountScreen.js";
import {SelectInterestsScreen} from "./Create Account/SelectInterestsScreen.js";
import {SwipePageScreen} from "./MainPage/SwipePageScreen.js";
import {MatchPageScreen} from "./MainPage/MatchPageScreen.js";
import {ProfileScreen} from "./Profile/ProfileScreen.js";

export default function App(){

    const [fontsLoaded] = useFonts({
        "Akshar-Bold": require("../assets/fonts/Akshar-Bold.ttf"),
        "Akshar-Medium": require("../assets/fonts/Akshar-Medium.ttf"),
        "Akshar-Light": require("../assets/fonts/Akshar-Light.ttf"),
        "AbhayaLibre-SemiBold": require("../assets/fonts/AbhayaLibre-SemiBold.ttf"),
        "AbhayaLibre-Medium": require("../assets/fonts/AbhayaLibre-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
    })

    if (!fontsLoaded) {
        return undefined;
    }


    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                    animation: 'none'

                }}
                >

            <Stack.Screen name="Introduction" component={IntroductionScreen}/>
                <Stack.Screen name="ChooseAction" component={ChooseActionScreen}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="CreateAccount" component={CreateAccountScreen}/>
                <Stack.Screen name="SelectInterests" component={SelectInterestsScreen}/>
                <Stack.Screen name="SwipePage" component={SwipePageScreen}/>
                <Stack.Screen name="MatchPage" component={MatchPageScreen}/>
                <Stack.Screen name="ProfilePage" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>


    );
};
