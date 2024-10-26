import {View, Text} from 'react-native';
import React from 'react';
import Playground from '../components/Playground';
import {gaunKhaneKatha} from '../constants/gaunKhaneKatha';

const GaunKhaneKatha = ({route}) => {
  const {params} = route;
  return <Playground payload={gaunKhaneKatha} category={params.data} />;
};

export default GaunKhaneKatha;
