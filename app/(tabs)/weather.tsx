import React from "react";
import { StyleSheet } from 'react-native'; // Add this import
import { Text, View } from '../../components/Themed';
import IconAndTextCard from '../../components/cards/iconAndTextCard';
import IconAndDropdownCard from '../../components/cards/iconAndDropdown';
import TextAndDropdown from "../../components/cards/textAndDropdown";
import HeadlineAndTextAndDropdown from "../../components/cards/headlineAndTextAndDropdown";

export default function TabWeatherScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Witterung</Text>
            <IconAndTextCard icon={require('../../icons/stormCloud.png')} headText='Sonne' subText='Helligkeit: Hell' />
            <IconAndDropdownCard icon={require('../../icons/stormCloud.png')} dropdownOptions={["Value", "Value2"]} />
            <TextAndDropdown text="222 KW" dropdownOptions={["Value", "Value2"]} />
            <HeadlineAndTextAndDropdown headText="Verbauch und so dings" subText="22 KW" dropdownOptions={["Value", "Value2"]} />

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4f5d75',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
