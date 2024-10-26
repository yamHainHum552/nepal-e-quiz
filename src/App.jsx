import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import History from './screens/History';
import Politics from './screens/Politics';
import Sports from './screens/Sports';
import Geography from './screens/Geography';

import AboutUs from './screens/AboutUs';
import Contact from './screens/Contact';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import GaunKhaneKatha from './screens/GaunKhaneKatha';
import {drawerElements} from './constants/drawerElements';
import DrawerItems from './components/DrawerItems';
import Literature from './screens/Literature';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#0D1B2A',
          shadowColor: '#0D1B2A',
          height: hp(5),
        },
        headerTintColor: '#FFFFFF',
        drawerStyle: {
          backgroundColor: '#1B263B',
        },
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.toggleDrawer()}
            style={{marginLeft: 10}}>
            <IoniIcons name="reorder-three" size={40} color="white" />
          </Pressable>
        ),
      })}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Politics" component={Politics} />
      <Stack.Screen name="Sports" component={Sports} />
      <Stack.Screen name="Geography" component={Geography} />
      <Stack.Screen name="Gaun Khane Katha" component={GaunKhaneKatha} />
      <Stack.Screen name="Literature" component={Literature} />
      <Stack.Screen name="Contact Us" component={Contact} />
      <Stack.Screen name="About Us" component={AboutUs} />
    </Stack.Navigator>
  );
};

// Custom Drawer Content
const CustomDrawerContent = props => {
  const {state, navigation} = props;
  // console.log(navigation.getState().routes[0]);

  const activeRouteIndex = state?.index;
  const activeRouteName = state?.routeNames[activeRouteIndex];

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContentContainer}>
      {/* Drawer Header */}
      <View style={styles.drawerHeader}>
        <Text style={styles.headerText}>Nepal-e-Quiz</Text>

        <Image
          source={require('./assets/images/flag.png')}
          style={{height: hp(5), width: wp(5)}}
        />
      </View>

      {/* Drawer Items */}

      {drawerElements(navigation).map((item, index) => (
        <View key={item.id}>
          <DrawerItems
            label={item.label}
            onPress={item.onPress}
            routeName={item.routeName}
            activeRouteName={activeRouteName}
            navigation={navigation}
            icon={item.icon}
          />
        </View>
      ))}

      {/* Additional Custom Content */}
      <View style={styles.customContent}>
        <Text style={styles.customContentText}>Please give us Feedback!!!</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home Screen" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// Styles for the drawer
const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#1B263B',
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  customContent: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  customContentText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default App;
