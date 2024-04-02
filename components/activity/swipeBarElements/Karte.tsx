import { View, Text } from '../../Themed';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type Props = { initialLayout: object, locations: any };

export default function Karte({ initialLayout, locations }: Props) {

    let markerId = 0;
    // console.log("")
    // console.log(locations);
    return (
        <View style={styles.mapPage}>
            <View style={styles.mapTextContainer}>
                <Text style={styles.whiteText}>Karte</Text>
            </View>

            <View style={styles.mapContainer}>


                <MapView
                    style={styles.map}
                    initialRegion={{
                        "latitude": 47.41307963316573,
                        "latitudeDelta": 0.0922,
                        "longitude": 9.739040306963899,
                        "longitudeDelta": 0.0421,
                    }}
                >

                    <Marker
                        title="HTL Dornbirn"
                        description="Coding Center"
                        coordinate={{ "latitude": 47.41386294700093, "longitude": 9.723371237209113 }}
                    />

                    {locations.map((location: {
                        name: string; descprition: string; latitude: string; longitude: string;
                    }) => {
                        console.log(location.latitude);
                        console.log(location.longitude);

                        let latitude = Number(location.latitude);
                        let longitude = Number(location.longitude);
                        markerId++;

                        return (
                            <Marker
                                key={markerId}
                                title={location.name}
                                description={location.descprition}
                                coordinate={{ "latitude": latitude, "longitude": longitude }}
                            />
                        )
                    })}

                </MapView>
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