import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import QuizBox from '../components/QuizBox';
import {FlashList} from '@shopify/flash-list';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {shuffle} from '../helpers/index';
import ScrollToTop from './ScrollToTop';

const Playground = ({payload, category, isLoading}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [shuffledData, setShuffledData] = useState([]);
  const [yOffset, setYOffset] = useState(0);
  const [iconVisible, setIconVisible] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    const shuffledData = shuffle(payload);
    setShuffledData(shuffledData);
  }, [payload]);
  useEffect(() => {
    yOffset > 500 ? setIconVisible(true) : setIconVisible(false);
  }, [yOffset]);

  const hanldeScroll = event => {
    setYOffset(event.nativeEvent.contentOffset.y);
  };

  return (
    <ScreenWrapper bg="#0D1B2A">
      {isLoading ? (
        <ActivityIndicator size={40} style={{alignContent: 'center'}} />
      ) : (
        <View
          style={{
            height: Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
          }}>
          {/* FlashList to render the quiz items */}
          <FlashList
            ref={scrollRef}
            data={shuffledData}
            contentContainerStyle={{
              paddingBottom: hp(15),
            }}
            keyExtractor={(item, index) =>
              item?.id?.toString() || index.toString()
            }
            showsVerticalScrollIndicator={false}
            estimatedItemSize={100}
            onScroll={hanldeScroll}
            scrollEventThrottle={16}
            renderItem={({item, index}) => (
              <QuizBox
                item={item}
                index={index}
                setSelectedAnswer={setSelectedAnswer}
              />
            )}
          />
        </View>
      )}

      {iconVisible && <ScrollToTop scrollRef={scrollRef} />}
    </ScreenWrapper>
  );
};

export default Playground;
