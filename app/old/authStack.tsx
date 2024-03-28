import { Redirect, Stack } from 'expo-router'
import React from 'react'
import { View, StyleSheet } from 'react-native'


export default function authStack() {

    console.log("authStack");

    return (
        <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
    );

}

const styles = StyleSheet.create({
    authStack: {
        height: '100%'
    }
})


