import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Loading from '../components/Loading';
import {send, EmailJSResponseStatus} from '@emailjs/react-native';

const Contact = ({route}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const serviceId = 'service_ynttmg5';
  const templateId = 'template_a4l64fc';
  const publicKey = '6R4xwyDtyNA0O9AA1';

  const {text} = route.params || '';
  useEffect(() => {
    setMessage(text);
  }, []);

  const checkEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async () => {
    try {
      if (checkEmail(email)) {
        setIsSending(true);
        await send(
          serviceId,
          templateId,
          {
            name,
            email,
            message,
          },
          {
            publicKey,
          },
        );

        Snackbar.show({
          text: 'Message Sent',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'green',
          textColor: 'white',
        });
      } else {
        Snackbar.show({
          text: 'Invalid Email Address',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } catch (err) {
      Snackbar.show({
        text: 'Error: ' + err,
        backgroundColor: 'red',
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
      });
      console.error('ERROR', err);
    }
    setIsSending(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>
            We would love to hear from you! Please fill out the form below or
            contact us directly.
          </Text>
        </View>

        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <Text style={styles.infoText}>Email: yamaterc30@gmail.com</Text>
          <Text style={styles.infoText}>Address: Morang, Nepal</Text>
        </View>

        {/* Feedback Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Send us a Message</Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
            placeholderTextColor="#AAB6C6"
            style={styles.input}
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Your Email"
            placeholderTextColor="#AAB6C6"
            keyboardType="email-address"
            style={styles.input}
          />

          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Your Message"
            placeholderTextColor="#AAB6C6"
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
          />

          <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
            {isSending ? (
              <Loading color="black" />
            ) : (
              <Text style={styles.submitButtonText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles for the Contact Us screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#76D7C4',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  contactInfo: {
    marginBottom: 20,
    backgroundColor: '#324A5E',
    borderRadius: 10,
    padding: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  formContainer: {
    backgroundColor: '#2E4057',
    borderRadius: 10,
    padding: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#76D7C4',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#445E75',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#FFFFFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#76D7C4',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#0D1B2A',
    fontWeight: 'bold',
  },
});

export default Contact;
