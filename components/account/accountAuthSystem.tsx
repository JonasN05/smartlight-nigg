import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Session } from '@supabase/supabase-js'

export default function AccountAuthSystem() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        })
    }, [])

    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState('')
    const [website, setWebsite] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')

    useEffect(() => {
        if (session) getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)
            if (!session?.user) throw new Error('No user on the session!')

            const { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', session?.user.id)
                .single()
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    async function updateProfile({ username, website, avatar_url, }: { username: string, website: string, avatar_url: string }) {
        try {
            setLoading(true)
            if (!session?.user) throw new Error('No user on the session!')

            const updates = {
                id: session?.user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            }

            const { error } = await supabase.from('profiles').upsert(updates)

            if (error) {
                throw error
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.accountInfo}>



                <View style={[styles.verticallySpaced, styles.mt20]}>
                    <Input label="Email" value={session?.user?.email} disabled />
                </View>
                <View style={styles.verticallySpaced}>
                    <Input label="Username" value={username || ''} onChangeText={(text) => setUsername(text)} />
                </View>
                <View style={styles.verticallySpaced}>
                    <Input label="Coming..." value={website || ''} onChangeText={(text) => setWebsite(text)} />
                </View>

                <View style={[styles.verticallySpaced, styles.mt20]}>
                    <Button
                        title={loading ? 'Loading ...' : 'Update'}
                        onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
                        disabled={loading}
                    />
                </View>
            </View>

            <View style={styles.verticallySpaced}>
                <Button title="Ausloggen" onPress={() => supabase.auth.signOut()} />
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
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
    accountInfo: {
        backgroundColor: "#2D3142",
        //height: 100,
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'black',
        padding: 10,

    }
})