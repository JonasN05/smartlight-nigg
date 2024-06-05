import React from "react";
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import IconAndTextCard from '../../components/cards/iconAndTextCard';
import IconAndDropdownCard from '../../components/cards/iconAndDropdown';
import TextAndDropdown from "../../components/cards/textAndDropdown";
import HeadlineAndTextAndDropdown from "../../components/cards/headlineAndTextAndDropdown";
import RealTimeClock from '../../components/RealTimeClock';

export default function TabWeatherScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Standort</Text>
            <IconAndDropdownCard icon={require('../../icons/location.png')} dropdownOptions={["Dornbirn", "Lustenau"]} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <IconAndTextCard 
                icon={require('../../icons/stormCloud.png')} 
                headText='live wetter wenn möglich je nach ort' 
                subText={"todo : helligkeit vlt auch temp"} 
            />
            <IconAndTextCard 
                icon={require('../../icons/clock.png')} 
                headText={<RealTimeClock />}  
                subText={"todo : helligkeit"} 
            />
            <TextAndDropdown 
                text="222 KW" 
                dropdownOptions={["Value", "Value2"]} 
            />
            <HeadlineAndTextAndDropdown 
                headText="Verbauch und so dings" 
                subText="22 KW" 
                dropdownOptions={["Value", "Value2"]} 
            />
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
