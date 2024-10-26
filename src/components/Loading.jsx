import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Loading = props => {
  return (
    <View style={styles.container}>
      {/* Activity Indicator (Spinner) */}
      <ActivityIndicator size="large" color="#76D7C4" {...props} />
    </View>
  );
};

export default Loading;

// Styles for the Loading component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    backgroundColor: '#1B263B', // Dark background to match app theme
  },
});
