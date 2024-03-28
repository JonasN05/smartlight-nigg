import React, { useState } from 'react'
import { Text } from 'react-native'
import SignIn from './signIn'
import SignUp from './signUp'
import { Pressable, View } from 'react-native'

export default function authContainer() {

    const [signInUp, setSignInOn] = useState(true)
    const [buttonName, setButtonName] = useState('SignIn')

    return (
        <View>
            {signInUp ? <SignIn /> : <SignUp />}
            <Pressable style={{ height: 40, backgroundColor: 'orange' }} onPress={pressHandler}><Text>{buttonName}</Text></Pressable>
        </View>

    )

    function pressHandler() {

        if (!signInUp) {
            setButtonName("SignIn");
            console.log("signin")
        } else {
            console.log("signup")
            setButtonName("SignUp");
        }

        setSignInOn(!signInUp);
        console.log(signInUp)
    }
}
