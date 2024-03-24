import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view'
import Karte from '../swipeBarElements/Karte';
import SmartLights from '../swipeBarElements/SmartLights';
import Andere from '../swipeBarElements/Andere';
import TabActivityScreen from '../../../app/(tabs)/activity';

export default function SwipeBar() {

    const initialLayout = { width: Dimensions.get('window').width };

    const tabStyleWidth = initialLayout.width / 3;

    const indicatorWidthAdjustment = 50;
    const indicatorWidth = initialLayout.width / 3 - indicatorWidthAdjustment;
    const indicatorDistanze = (initialLayout.width / 3 - indicatorWidth) / 2;


    const renderTabBar = (props: any) => (
        <TabBar

            {...props}
            indicatorStyle={{ backgroundColor: 'white', width: indicatorWidth, borderRadius: 2, marginHorizontal: indicatorDistanze }}
            style={{ backgroundColor: 'transparent', elevation: 0, }}
            activeColor={'white'}
            inactiveColor={'white'}
            tabStyle={{ padding: 0, margin: 0, }}

            //labelStyle={{ fontWeight: 'bold' }}

            renderLabel={({ route, focused, color }: { route: { title: string }; focused: boolean; color: string }) => (
                <View style={{ width: tabStyleWidth, display: 'flex', alignItems: 'center' }}>
                    <Text style={{ color, fontWeight: focused ? '800' : 'normal' }}>
                        {route.title}
                    </Text>
                </View>

            )}


        />
    );


    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'map', title: 'Karte' },
        { key: 'smartLights', title: 'SmartLights' },
        { key: 'other', title: 'Andere' },
    ]);



    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'map':
                return <Karte initialLayout={initialLayout} ></Karte>;
            case 'smartLights':
                return <SmartLights></SmartLights>;
            case 'other':
                return <Andere></Andere>;
            default:
                return null;
        }
    };

    return (
        <View style={styles.swipeContainer}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}

            />
        </View>

    )
}

const styles = StyleSheet.create({
    swipeContainer: {
        backgroundColor: '#4F5D75',
        height: "100%",
        marginTop: 10
    },

});
