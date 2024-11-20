import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IoniIcons from 'react-native-vector-icons/Ionicons';

const AboutUs = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#0D1B2A',
        shadowColor: '#0D1B2A',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#FFFFFF',
      drawerStyle: {
        backgroundColor: '#1B263B',
      },
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.toggleDrawer()}
          style={{marginLeft: 10}}>
          <IoniIcons name="reorder-three" size={40} color="white" />
        </Pressable>
      ),
    });
  }, []);
  return (
    <ScreenWrapper bg="#0D1B2A">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/flag.png')}
            style={{height: hp(8), width: wp(8)}}
          />

          <Text style={styles.title}>Nepal-e-Quiz</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the App</Text>
          <Text style={styles.sectionContent}>
            Nepal-e Quiz is an educational quiz application designed to help
            users learn more about Nepal and various other international topics
            in a fun and interactive way. Our app features multiple categories,
            including History, Politics, Sports, Science, and more.
          </Text>
        </View>

        {/* App Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <Text style={styles.sectionContent}>
            - Multiple quiz categories: History, Sports, Literature, and more
            {'\n'}- Engaging and challenging questions{'\n'}- Interactive UI and
            easy navigation{'\n'}- Regular updates with new content{'\n'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Team</Text>
          <Text style={styles.sectionContent}>
            This app was developed by Yam Nath Guragain, with a passion for
            education and technology. Our goal is to provide an engaging
            platform to learn and explore new knowledge.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.sectionContent}>
            Have feedback or suggestions? Reach out to us at:{'\n'}
            Email: yamguragain30@gmail.com
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#76D7C4',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 22,
    marginBottom: 10,
  },
});

export default AboutUs;
