import React, {useState} from 'react';

import Playground from '../components/Playground';
import {nepaliLiterature} from '../constants/literature';

const Literature = ({route}) => {
  const {params} = route;

  return <Playground payload={nepaliLiterature} category={params.data} />;
};

export default Literature;
