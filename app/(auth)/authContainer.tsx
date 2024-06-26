import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import SignIn from './signIn'
import SignUp from './signUp'
import { Pressable, View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar';
import TitlePage from './titlePage'

export default function authContainer() {

    const [id, setId] = useState(0)

    const [signInUp, setSignInOn] = useState(true)
    const [buttonName, setButtonName] = useState("Registrieren")
    const [question, setQuestion] = useState('Noch kein Konto?')

    if (Platform.OS === 'android') {
        NavigationBar.setBackgroundColorAsync("#4F5D75");
    }



    useEffect(() => {
        if (id == 1) {
            setButtonName("Registrieren")
            setQuestion("Noch kein Konto?");
        } else if (id == 2) {
            setButtonName("Anmelden")
            setQuestion("Schon ein Konto?")
        }
    }, [id]);

    console.log("initial " + signInUp)

    if (id == 0) {
        return (<TitlePage setId={setId}></TitlePage>)
    } else if (id == 1) {
        return (

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <View style={styles.background}>

                        <View style={styles.signComponentContainer}>
                            {signInUp ? <SignIn /> : <SignUp />}
                        </View>

                        <View style={styles.buttonContainer}>
                            <Text style={styles.question}>
                                {question}
                            </Text>
                            <Pressable style={styles.buttonStyle} onPress={pressHandler}><Text style={styles.whiteTextForButton}>{buttonName}</Text></Pressable>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView >

        )
    } else if (id == 2) {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <View style={styles.background}>

                        <View style={styles.signComponentContainer}>
                            {signInUp ? <SignUp /> : <SignIn />}
                        </View>

                        <View style={styles.buttonContainer}>
                            <Text style={styles.question}>
                                {question}
                            </Text>
                            <Pressable style={styles.buttonStyle} onPress={pressHandler}><Text style={styles.whiteTextForButton}>{buttonName}</Text></Pressable>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView >)
    }



    function pressHandler() {
        console.log("inPress " + signInUp)
        if (id == 1) {
            if (!signInUp) {
                setButtonName("Registrieren");
                setQuestion('Noch kein Konto?');
            } else {
                setQuestion("Schon ein Konto?");
                setButtonName("Anmelden");
            }
            setSignInOn(!signInUp);
        } else if (id == 2) {
            if (!signInUp) {
                setQuestion("Schon ein Konto?");
                setButtonName("Anmelden");
            } else {
                setButtonName("Registrieren");
                setQuestion('Noch kein Konto?');
            }
            setSignInOn(!signInUp);
        }

        console.log(signInUp)
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#4F5D75',
        height: '100%'
    },
    whiteTextForButton: {
        color: 'white',
        textShadowColor: 'black',
        //textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15,
    },
    buttonStyle: {
        marginLeft: 5,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '25%',
        marginBottom: 30,
    },
    question: {
        color: 'white',
        fontWeight: '100',
    },
    signComponentContainer: {
        backgroundColor: 'transparent',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
})