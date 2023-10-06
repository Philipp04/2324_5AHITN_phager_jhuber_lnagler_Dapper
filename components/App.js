import * as React from 'react';
import {IntroductionScreen} from "./IntroductionScreen.js";
import {ChooseActionScreen} from "./ChooseActionScreen.js";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useFonts} from "expo-font";

export default function App(){

    const [fontsLoaded] = useFonts({
        "Akshar-Bold": require("../assets/fonts/Akshar-Bold.ttf"),
        "Akshar-Medium": require("../assets/fonts/Akshar-Medium.ttf"),
    })

    if (!fontsLoaded) {
        return undefined;
    }


    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="First" component={IntroductionScreen}/>
                <Stack.Screen name="Second" component={ChooseActionScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
