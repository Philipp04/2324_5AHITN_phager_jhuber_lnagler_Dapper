import * as React from 'react';
import {FirstScreen} from "./FirstScreen.js";
import {Second} from "./Second.js";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App(){
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="First" component={FirstScreen}/>
                <Stack.Screen name="Second" component={Second}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
