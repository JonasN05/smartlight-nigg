import { View, Text } from '../../Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Andere() {
    return (
        <View style={styles.otherPage}>
            <Text style={styles.whiteText}>Andere</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    otherPage: {
        backgroundColor: '#4F5D75',
        height: "100%",
    },

    whiteText: {
        color: 'white',
    },

});
