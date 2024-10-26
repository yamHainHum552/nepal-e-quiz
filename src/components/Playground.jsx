import {View, Text, Dimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import QuizBox from '../components/QuizBox';
import {FlashList} from '@shopify/flash-list';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {shuffle} from '../helpers/DataManipulation';
import ScrollToTop from './ScrollToTop';

const Playground = ({payload, category}) => {
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
          } // Fallback to index
          showsVerticalScrollIndicator={false}
          estimatedItemSize={100}
          onScroll={hanldeScroll} // Track scroll event here
          scrollEventThrottle={16} // Throttle for better performance
          ListHeaderComponent={
            <View className="flex items-center flex-row justify-center gap-5">
              <Text className="font-bold text-xl text-white">
                {category.toUpperCase()}
              </Text>
              <Text className="font-semibold text-xl text-white">
                {payload.length} Questions
              </Text>
            </View>
          }
          renderItem={({item, index}) => (
            <QuizBox
              item={item}
              index={index}
              setSelectedAnswer={setSelectedAnswer}
            />
          )}
        />
      </View>
      {iconVisible && <ScrollToTop scrollRef={scrollRef} />}
    </ScreenWrapper>
  );
};

export default Playground;
