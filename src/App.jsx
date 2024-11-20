import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Contact from './screens/Contact';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {drawerElements} from './constants/drawerElements';
import DrawerItems from './components/DrawerItems';

import Quiz from './screens/Quiz';
import DeviceInfo from 'react-native-device-info';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const currentVersion = DeviceInfo.getVersion();

// Stack Navigator
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => {
        const {data, length} = route.params || '';

        return {
          headerShown: true,
          headerTitle: `${data} (${length})`,
          headerStyle: {
            backgroundColor: '#0D1B2A',
            shadowColor: '#0D1B2A',
            height: hp(5),
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#FFFFFF',

          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.toggleDrawer()}
              style={{marginLeft: 10}}>
              <IoniIcons name="reorder-three" size={40} color="white" />
            </Pressable>
          ),
        };
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={({navigation}) => {
          return {
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <IoniIcons name="arrow-back" size={30} color="white" />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

// Custom Drawer Content
const CustomDrawerContent = props => {
  const {state, navigation} = props;

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

      <View
        style={{
          padding: 20,
        }}>
        <Text style={{fontSize: hp(2), color: 'white', textAlign: 'center'}}>
          Version {currentVersion}
        </Text>
        <Text
          style={{
            fontSize: hp(2),
            color: 'white',
            textAlign: 'center',
            marginTop: 5,
          }}>
          © 2024 Nepal-e-Quiz
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home Screen" component={StackNavigator} />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitle: 'Contact Us',
            headerTitleAlign: 'center',
          }}
        />

        <Drawer.Screen
          name="About"
          component={AboutUs}
          options={{
            headerTitle: 'About Us',
            headerTitleAlign: 'center',
          }}
        />
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
    borderRadius: 10,
    marginTop: hp(2),
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
