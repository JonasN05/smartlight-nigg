import { Stack } from 'expo-router'
import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function tabStack() {
    return (
        <View style={styles.tabStack}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </View>
    )
}

const styles = StyleSheet.create({
    tabStack: {
        height: '100%'
    }
})
