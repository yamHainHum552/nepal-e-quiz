import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

const UpdateCard = ({updateData}) => {
  return (
    <View
      style={{
        backgroundColor: '#0D1B2A',
        padding: 20,
        margin: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 4},
        elevation: 8,
      }}>
      {/* Update Details */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: 10,
        }}>
        {updateData.message}
      </Text>

      {/* Action Button */}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://play.google.com/store/apps/details?id=com.yamguragain.quiz&showAllReviews=true',
          )
        }
        style={{
          backgroundColor: '#1F7A8C',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}>
          Update Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateCard;
