import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const Category = ({item, onPress}) => {
  const windowWidth = Dimensions.get('window').width;
  const categorySize = windowWidth / 2 - 40; // Adjust size for 2 columns with padding

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: categorySize,
        height: categorySize,
        backgroundColor: '#1B263B', // You can change the background color
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      {item.icon}
      <Text className="text-white text-lg font-semibold text-center">
        {item.category}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
