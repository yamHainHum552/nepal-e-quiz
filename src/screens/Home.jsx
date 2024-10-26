import {View, Text, FlatList, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {categories} from '../constants/cateogries'; // Ensure the file path is correct
import Category from '../components/Category';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelection = item => {
    setSelectedCategory(item.category);
    navigation.navigate(item.category, {data: item.category});
  };

  return (
    <ScreenWrapper bg="#0D1B2A">
      {/* Overlay to darken background for readability */}
      <View className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Header Text */}
      <View className="mb-8">
        <Text className="font-bold text-4xl text-white tracking-widest text-center">
          Select Category
        </Text>
      </View>

      {/* Category List */}
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({item}) => (
          <Category
            item={item}
            onPress={() => handleCategorySelection(item)}
            className="mb-4"
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </ScreenWrapper>
  );
};

export default Home;
