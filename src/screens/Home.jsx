import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useCallback, useEffect, useRef} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {categories} from '../constants/cateogries';
import Category from '../components/Category';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {generateTitle} from '../helpers';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
} from 'react-native-google-mobile-ads';

import {AD_UNIT_ID_BANNER, AD_UNIT_ID_INTERSTITIAL} from '@env';
import UpdateCard from '../components/UpdateCard';
import DeviceInfo from 'react-native-device-info';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : AD_UNIT_ID_BANNER;
const adUnitId2 = __DEV__ ? TestIds.INTERSTITIAL : AD_UNIT_ID_INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(adUnitId2, {
  keywords: [
    'education',
    'quiz',
    'learning',
    'general knowledge',
    'Nepal',
    'trivia',
    'study',
    'knowledge',
    'games',
    'puzzle',
  ],
});

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const bannerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    interstitial.load();

    getUpdate();

    return () => {
      unsubscribe();
      interstitial.removeAllListeners();
    };
  }, []);

  const getUpdate = async () => {
    try {
      setLoading(true);
      let data = await fetch(`${process.env.PUBLIC_SERVER}/api/update/getData`);
      data = await data.json();
      const updateInfo = data[0];

      setUpdateData(updateInfo);

      if (Number(DeviceInfo.getVersion()) !== updateInfo.version) {
        setIsUpdateAvailable(true);
      } else {
        setIsUpdateAvailable(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View className="flex flex-row items-center justify-center  ">
          <Text className="font-bold text-white text-xl ">Nepal-e-Quiz</Text>
          <Image
            source={require('../assets/images/flag.png')}
            style={{height: hp(10), width: wp(10)}}
            resizeMode="contain"
          />
        </View>
      ),
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const fetchData = async () => {
    try {
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        Snackbar.show({
          text: 'Please turn on the wifi and try reloading again',
          backgroundColor: 'orange',
          textColor: 'white',
        });
        return;
      }

      const categories = [
        'sports',
        'geography',
        'gaun',
        'literature',
        'history',
        'politics',
        'religion',
        'science',
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
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCategorySelection = async item => {
    setSelectedCategory(item.category);
    let title = generateTitle(item.category);
    let categoryData = await AsyncStorage.getItem(`${title}Data`);
    categoryData = JSON.parse(categoryData);

    navigation.navigate('Quiz', {
      data: item.category,
      length: categoryData.length,
    });

    if (loaded) {
      interstitial.show();
      setLoaded(false);
      interstitial.load();
    }
  };

  return (
    <ScreenWrapper bg="#0D1B2A">
      {isUpdateAvailable && updateData.version && !loading && (
        <TouchableWithoutFeedback onPress={() => setIsUpdateAvailable(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10,
            }}>
            <UpdateCard updateData={updateData} />
          </View>
        </TouchableWithoutFeedback>
      )}
      <View className="absolute inset-0 bg-black bg-opacity-50" />

      <FlatList
        data={categories}
        numColumns={2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
      <BannerAd
        ref={bannerRef}
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </ScreenWrapper>
  );
};

export default Home;
