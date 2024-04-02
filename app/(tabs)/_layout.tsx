import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable, useColorScheme } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from '../../constants/Colors';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  if (Platform.OS === 'android') {
    NavigationBar.setBackgroundColorAsync("#2D3142");
  }


  const colorScheme = useColorScheme();

  console.log('tabsLayout');


  const headerStyle = {
    backgroundColor: '#2D3142',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 15,
        shadowColor: 'black',
      },
    }),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  };

  return (
    <Tabs
      screenOptions={{
        headerTintColor: "white",
        headerStyle: headerStyle,
        tabBarStyle: { backgroundColor: "#2D3142", borderColor: 'transparent', elevation: 0 },
        tabBarActiveTintColor: "white",


      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} style={{ marginTop: 5 }} />
          ),

          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),

        }}
      />
      <Tabs.Screen
        name="consumption"
        options={{
          title: 'Verbrauch',
          // chart-bar
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={30} style={{ marginTop: 5 }} />
          ),
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Aktivität',
          // lightning-bolt
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lightning-bolt" color={color} size={30} style={{ marginTop: 5 }} />
          ),
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: 'Witterung',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="white-balance-sunny" color={color} size={30} style={{ marginTop: 5 }} />
          ),
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Konto',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} style={{ marginTop: 5 }} />
          ),
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
