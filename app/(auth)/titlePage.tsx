import { Link, NavigationContainer } from '@react-navigation/native'
import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import TitleHeader from './components/titleHeader'

type Props = {
    setId: any,
}

export default function titlePage({ setId }: Props) {


    function navigateToSignIn() {
        setId(1);
    }
    function navigateToSignUp() {
        setId(2);
    }

    return (
        <View style={styles.background}>

            <TitleHeader></TitleHeader>



            <View style={styles.buttons}>
                <View style={styles.signInButtonContainer}>
                    <Pressable
                        onPress={() => navigateToSignIn()}
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

                <View style={styles.signInButtonContainer}>
                    <Pressable
                        onPress={() => navigateToSignUp()}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#1d202b' : '#2D3142',
                            },
                            styles.signInButton,
                        ]}
                    >
                        <Text style={styles.signInName}>
                            Reistrieren
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.copyRightContainer}>
                <Text style={styles.copyRightText}>
                    © Joans Nigg, Luca Grabherr, Timothe Goldmann, Noel Riedmann
                </Text>
            </View>


        </View >
    )
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#4F5D75',
        height: '100%'
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
        marginTop: '5%',
    },
    copyRightContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 20
    },
    copyRightText: {
        color: 'white',
        fontWeight: '100',
        fontSize: 10,
    },
    buttons: {
        marginTop: '25%',
        width: '100%'
    },
})