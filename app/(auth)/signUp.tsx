import { supabase } from '@/lib/supabase'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Alert, AppState, Button, View, StyleSheet, Text, Pressable } from 'react-native'
import { Input } from 'react-native-elements'


AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }


    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Konto erstellen
                </Text>
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
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

            <View style={styles.verticallySpaced}>
                <Pressable style={styles.signIn} disabled={loading} onPress={() => signUpWithEmail()} >
                    <Text style={styles.signInName}>
                        Registrieren
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    mt20: {
        marginTop: 20,
    },
    signIn: {
        backgroundColor: '#2D3142',
        height: 50,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "black",
        elevation: 5,
        width: '90%'
    },
    signInName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})
