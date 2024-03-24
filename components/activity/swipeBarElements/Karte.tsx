import MapView from 'react-native-maps';
import { View, Text } from '../../Themed';
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

type Props = { initialLayout: object };

export default function Karte({ initialLayout }: Props) {
    return (
        <View style={styles.mapPage}>
            <View style={styles.mapTextContainer}>
                <Text style={styles.whiteText}>Karte</Text>
            </View>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mapPage: {
        backgroundColor: '#4F5D75',
        width: '100%',
        height: "100%",
        display: 'flex',
        alignItems: 'center'

    },


    whiteText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 30,
    },
    map: {
        width: "100%",
        height: 400,
        borderColor: 'black',
        borderWidth: 10,

    },
    mapContainer: {
        width: '100%'
    },
    mapTextContainer: {
        backgroundColor: 'transparent',
        height: 100,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }


});