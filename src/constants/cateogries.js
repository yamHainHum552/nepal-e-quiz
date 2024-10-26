import Sports from '../assets/icons/Sports';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Politics from 'react-native-vector-icons/FontAwesome5';
import Flag from 'react-native-vector-icons/FontAwesome6';

export const categories = [
  {
    id: 1,
    icon: <IoniIcons name="earth" size={40} color="white" />,
    category: 'Geography',
  },
  {
    id: 2,
    icon: <Flag name="house-flag" size={40} color="white" />,
    category: 'Politics',
  },
  {
    id: 3,
    icon: <FontAwesome name="history" size={40} color="white" />,
    category: 'History',
  },
  {
    id: 4,
    icon: <AntDesign name="yuque" size={40} color="white" />,
    category: 'Gaun Khane Katha',
  },
  {
    id: 5,
    icon: <Sports />,
    category: 'Sports',
  },
  {
    id: 5,
    icon: <Politics name="book-open" size={40} color="white" />,
    category: 'Literature',
  },
];
