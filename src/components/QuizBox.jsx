import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Loading from './Loading';
import {shuffle} from '../helpers/index';
import {useNavigation} from '@react-navigation/native';

const Alphabets = ['A', 'B', 'C', 'D'];
const QuizBox = ({item, setSelectedAnswer, index}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [optionColors, setOptionColors] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    const shuffledOptions = shuffle(item.options);
    setShuffledOptions(shuffledOptions);
    setSelectedOption('');
    setOptionColors({});
  }, [item]);

  const handleAnswerCheck = option => {
    setSelectedAnswer(option);
    setSelectedOption(option);

    setOptionColors(prevColors => ({
      ...prevColors,
      [option]: option === item.answer ? 'green' : 'red',
    }));
  };

  const handleViewAnswer = () => {
    setSelectedOption(item.answer);
    setOptionColors({
      [item.answer]: 'green',
    });
  };

  return (
    <View
      className="flex justify-center items-start mx-2 p-4 bg-[#0D1B2A] rounded-lg "
      style={{marginVertical: hp(2)}}>
      {/* Question Section */}
      <View className="flex flex-row items-start mb-4">
        <Text className="font-bold text-lg text-white mr-2">{index + 1}.</Text>
        <Text className="font-bold text-lg text-white flex-shrink">
          {item.question}
        </Text>
      </View>

      {shuffledOptions.length === 0 ? (
        <Loading color="white" size={30} />
      ) : (
        shuffledOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: hp(1.5),
              width: '100%',
              paddingRight: hp(5),
              paddingHorizontal: wp(4),
              marginVertical: hp(1),
              backgroundColor:
                selectedOption === option
                  ? optionColors[option] || '#1B263B'
                  : '#1B263B',
              borderColor: '#1B263B',
              borderWidth: 2,
              borderRadius: 8,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
            onPress={() => handleAnswerCheck(option)}>
            <Text className="text-white font-semibold text-lg ">
              {Alphabets[index]}
            </Text>
            <Text className="text-white font-medium text-lg flex-shrink  ">
              {option}
            </Text>
          </TouchableOpacity>
        ))
      )}

      <View className="flex flex-row w-full items-center justify-around">
        <Pressable
          className="mt-4"
          style={{
            paddingVertical: hp(1.5),
            paddingHorizontal: wp(4),
            display: 'flex',
            backgroundColor: '#E63946',
            justifyContent: 'center',
            borderRadius: 8,
            alignItems: 'center',
          }}
          onPress={handleViewAnswer}>
          <Text className="font-semibold text-white text-lg">View Answer</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('Contact', {
              text: `I feel doubt on question ${item.question}.   `,
            })
          }>
          <Text className="text-white  underline ">Report Question</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default QuizBox;
