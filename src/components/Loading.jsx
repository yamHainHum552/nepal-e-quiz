import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Loading = props => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#76D7C4" {...props} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
