import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Playground from '../components/Playground';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import {generateTitle} from '../helpers';

const Quiz = ({route, navigation}) => {
  const {params} = route;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        setIsLoading(true);
        const storedData = await AsyncStorage.getItem(
          `${generateTitle(params?.data)}Data`,
        );
        if (!storedData) {
          Snackbar.show({
            text: 'Turn on your WiFi and try reopening the app',
            backgroundColor: 'orange',
            textColor: 'white',
          });
        }
        if (storedData) {
          setData(JSON.parse(storedData));
        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error loading data from AsyncStorage:', error.message);
      }
    };

    loadStoredData();
  }, []);

  return (
    <Playground payload={data} category={params.data} isLoading={isLoading} />
  );
};

export default Quiz;
