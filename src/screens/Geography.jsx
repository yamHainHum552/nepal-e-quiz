import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {geography} from '../constants/geography';
import QuizBox from '../components/QuizBox';
import Playground from '../components/Playground';

const Geography = ({route}) => {
  const {params} = route;

  return <Playground payload={geography} category={params.data} />;
};

export default Geography;
