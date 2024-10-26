import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';

import QuizBox from '../components/QuizBox';

import {politics} from '../constants/politics';
import Playground from '../components/Playground';

const Politics = ({route}) => {
  const {params} = route;

  return <Playground payload={politics} category={params.data} />;
};

export default Politics;
