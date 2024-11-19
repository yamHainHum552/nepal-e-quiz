import {Image, StatusBar, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({navigation}) => {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    opacity.value = 0;

    setTimeout(
      () => (ring1Padding.value = withSpring(ring1Padding.value + hp(4))),
      100,
    );
    setTimeout(
      () => (ring2Padding.value = withSpring(ring2Padding.value + hp(3.5))),
      100,
    );
    setTimeout(() => (opacity.value = withSpring(opacity.value + 1)), 100);
    setTimeout(() => navigation.replace('Home'), 2000);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const categories = [
          'sports',
          'geography',
          'literature',
          'history',
          'politics',
          'gaun',
          'science',
          'religion',
        ];
        for (const category of categories) {
          let response = await fetch(
            `${process.env.PUBLIC_SERVER}/api/${category}/getData`,
          );

          if (!response.ok) {
            console.log(`Error fetching data for ${category}`);
            continue;
          }

          const data = await response.json();

          await AsyncStorage.setItem(`${category}Data`, JSON.stringify(data));
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ScreenWrapper bg="#0D1B2A">
      <StatusBar barStyle={'light-content'} />

      <View
        className="flex-1 items-center justify-center "
        style={{gap: hp(2)}}>
        <Animated.View
          className="rounded-full  bg-white/70 flex items-center justify-center"
          style={{padding: ring1Padding}}>
          <Animated.View
            className="rounded-full  bg-white/80 flex items-center justify-center"
            style={{padding: ring2Padding}}>
            <Image
              source={require('../assets/images/flag.png')}
              style={{height: hp(15), width: hp(15)}}
            />
          </Animated.View>
        </Animated.View>

        <Animated.Text
          className="font-bold tracking-widest text-white stroke-white"
          style={{fontSize: hp(4.5), opacity}}>
          Nepal-e-Quiz
        </Animated.Text>
        <Animated.Text
          className="font-semibold -tracking-wide text-xl text-white/80"
          style={{fontSize: hp(2.5), opacity}}>
          Knowledge is eternal
        </Animated.Text>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
