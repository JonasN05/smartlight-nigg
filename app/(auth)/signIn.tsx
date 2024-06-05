import React, { useState } from 'react'
import { View, Alert, StyleSheet, AppState, Pressable, Text, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from 'react-native-elements'
import * as NavigationBar from 'expo-navigation-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AuthHeader from './components/authHeader'

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

export default function SignIn() {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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

            <AuthHeader firstWord='Willkommen' secondWord='zurück'></AuthHeader>

            <View style={styles.inputContainer}>
                <View style={styles.inputEmailContainer}>
                    <Input
                        style={styles.inputColor}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder=" E-Mail"
                        autoCapitalize={'none'}
                        cursorColor={'#292929'}
                    // placeholderTextColor='white'
                    // inputContainerStyle={{ borderColor: 'white', borderBottomWidth: 1 }}
                    />
                </View>

                <View style={styles.inputPasswordContainer}>
                    <Input
                        style={styles.inputColor}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                        placeholder=" Passwort"
                        autoCapitalize={'none'}
                        cursorColor={'#292929'}
                    // placeholderTextColor='white'
                    // inputContainerStyle={{ borderColor: 'white' }}
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowPassword}
                    />
                </View>
            </View>

            <View style={styles.signInButtonContainer}>
                <Pressable
                    disabled={loading}
                    onPress={() => signInWithEmail()}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#1d202b' : '#2D3142',
                        },
                        styles.signInButton,
                    ]}
                >
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
        flex: 1
    },
    signInButton: {
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
    signInButtonContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '50%',
    },
    inputContainer: {
        marginTop: '10%',
        marginHorizontal: 30,
    },
    inputPasswordContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    inputEmailContainer: {

    },
    inputColor: {
        // fontWeight: '200',
        // color: 'white',
    },
    icon: {
        marginTop: 10,
        marginRight: 10,
        right: 0,
        position: 'absolute'
    },
})
