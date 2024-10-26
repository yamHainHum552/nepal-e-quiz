import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const AboutUs = () => {
  return (
    <ScreenWrapper bg="#0D1B2A">
      <ScrollView style={styles.container}>
        {/* App Logo/Title */}
        <View style={styles.header}>
          {/* Add your app logo here */}

          <Text style={styles.title}>Nepal-e-Quiz</Text>
        </View>

        {/* App Description */}
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
            - Multiple quiz categories: History, Sports, Science, and more{'\n'}
            - Engaging and challenging questions{'\n'}- Interactive UI and easy
            navigation{'\n'}- Regular updates with new content{'\n'}
          </Text>
        </View>

        {/* Team Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Team</Text>
          <Text style={styles.sectionContent}>
            This app was developed by Yam Nath Guragain, with a passion for
            education and technology. Our goal is to provide an engaging
            platform to learn and explore new knowledge.
          </Text>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.sectionContent}>
            Have feedback or suggestions? Reach out to us at:{'\n'}
            Email: yamaterc30@gmail.com
            {/* Phone: +977-9811092556 */}
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

// Styles for the About Us screen
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
    color: '#76D7C4', // Accent color for section titles
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
