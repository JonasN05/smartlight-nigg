import { Link, Redirect, Stack, router } from 'expo-router'
import React, { useState } from 'react'
import { View, Alert, StyleSheet, AppState, Pressable, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from 'react-native-elements'
import * as NavigationBar from 'expo-navigation-bar';

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})



export default function SignIn() {

    //console.log('signIn')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)

    }



    return (


        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.oval}>
                </View>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextFirstWord}>
                        Wilkommen
                    </Text>
                    <Text style={styles.headerTextSecondWord}>
                        zurück
                    </Text>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={[styles.verticallySpaced]}>
                    <Input
                        label="Email"
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder="email@address.com"
                        autoCapitalize={'none'}
                    />
                </View>
                <View style={styles.verticallySpaced}>
                    <Input
                        label="Password"
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Password"
                        autoCapitalize={'none'}
                    />
                </View>
            </View>

            <View style={styles.signInButtonContainer}>
                <Pressable style={styles.signInButton} disabled={loading} onPress={() => signInWithEmail()} >
                    <Text style={styles.signInName}>
                        Anmelden
                    </Text>
                </Pressable>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',

    },
    signInButton: {
        backgroundColor: '#2D3142',
        height: 50,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "black",
        elevation: 5,
        width: '80%'
    },
    signInName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    header: {
        backgroundColor: 'transparent',
    },
    oval: {
        backgroundColor: '#2D3142',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: -60,
        top: -60,
        width: 300,
        // elevation: 8,
        height: 300,
        borderRadius: 150,
        transform: [
            { scaleX: 2 }
        ]
    },
    headerTextFirstWord: {
        position: 'absolute',
        top: 80,
        fontSize: 35,
        fontWeight: '900',
        color: 'white'
    },
    headerTextSecondWord: {
        position: 'absolute',
        top: 120,
        fontSize: 35,
        fontWeight: '900',
        color: 'white'
    },
    headerTextContainer: {
        position: 'absolute',
        marginLeft: 30,
    },
    signInButtonContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 100,
    },
    inputContainer: {
        marginTop: 50,
        marginHorizontal: 30
    },
})
