import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {nepalHistoryQuestions} from '../constants/nepalHistoryQuestions';
import QuizBox from '../components/QuizBox';
import Playground from '../components/Playground';

const History = ({route}) => {
  const {params} = route;

  return <Playground payload={nepalHistoryQuestions} category={params.data} />;
};

export default History;
