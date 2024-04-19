import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Session } from '@supabase/supabase-js'
import AccountAuthSystem from '@/components/account/accountAuthSystem'

export default function Account() {

    return (
        <View>
            <AccountAuthSystem />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {

    },
})