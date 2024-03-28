import { Redirect, Stack } from 'expo-router'
import React from 'react'
import { View, StyleSheet } from 'react-native'


export default function tabStack() {

    console.log("tabStack");

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );

}

const styles = StyleSheet.create({
    tabStack: {
        height: '100%'
    }
})


