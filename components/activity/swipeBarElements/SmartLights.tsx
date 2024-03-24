import { View, Text } from '../../Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function SmartLights() {
    return (
        <View style={styles.smartLightsPage}>
            <Text style={styles.whiteText}>SmartLights</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    smartLightsPage: {
        backgroundColor: '#4F5D75',
        height: "100%",
    },

    whiteText: {
        color: 'white',
    },

});