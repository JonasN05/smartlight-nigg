import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    firstWord: string;
    secondWord: string;
}

export default function authHeader({ firstWord, secondWord }: Props) {
    return (
        <View style={styles.header}>
            <View style={styles.oval}>
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerTextFirstWord}>
                    {firstWord}
                </Text>
                <Text style={styles.headerTextSecondWord}>
                    {secondWord}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({



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
        elevation: 8,
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

})