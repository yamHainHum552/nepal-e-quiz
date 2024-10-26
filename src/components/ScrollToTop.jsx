import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ScrollToTop = ({scrollRef}) => {
  const scrollToTop = () => {
    scrollRef.current?.scrollToOffset({offset: 0, animated: true});
  };
  return (
    <Pressable style={styles.container} onPress={scrollToTop}>
      <MaterialIcons name="arrow-upward" color="white" size={30} />
    </Pressable>
  );
};

export default ScrollToTop;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
