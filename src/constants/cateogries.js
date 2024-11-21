import {
  IoniIcons,
  FontAwesome,
  AntDesign,
  FontAwesome6,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from '../assets/icons/index';

export const categories = [
  {
    id: 1,
    icon: <IoniIcons name="earth" size={40} color="white" />,
    category: 'Geography',
  },
  {
    id: 2,
    icon: <FontAwesome6 name="house-flag" size={40} color="white" />,
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
    icon: <MaterialIcons name="sports-soccer" size={40} color="white" />,
    category: 'Sports',
  },
  {
    id: 5,
    icon: <FontAwesome5 name="book-open" size={40} color="white" />,
    category: 'Literature',
  },
  {
    id: 6,
    icon: <AntDesign name="team" size={40} color="white" />,
    category: 'Religion and Culture',
  },
  {
    id: 7,
    icon: <Entypo name="lab-flask" size={40} color="white" />,
    category: 'Science and Technology',
  },
];
