import { supabase } from '@/lib/supabase'
import { Session } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'

export default function sesseionProvider() {

    const [session, setSession] = useState<Session | null>(null)

    //console.log("sessionprovider")

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            console.log('getsession')
            console.log(session);
        })
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            console.log('sessionOnAuthStateChange' + session)
            console.log(session);
        })
    }, [])

    //console.log('actual ' + session);

    return session;
}
