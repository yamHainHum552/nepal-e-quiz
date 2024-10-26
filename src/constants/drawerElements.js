import {useNavigation} from '@react-navigation/native';
import {Share, Linking} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Share function
const handleShare = async () => {
  try {
    const result = await Share.share({
      message: 'Check out this Nepali Quiz app: Nepal-e-Quiz.',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Shared with activity type:', result.activityType);
      } else {
        console.log('Shared Successfully');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Share dialog dismissed');
    }
  } catch (error) {
    alert('An error occurred while trying to share the app.');
    console.error(error);
  }
};

// Updated drawerElements with navigation passed
export const drawerElements = navigation => [
  {
    id: 1,
    label: 'Home',
    onPress: () => navigation.navigate('Home'),
    icon: <Entypo name="home" size={30} color="white" />,
    routeName: 'Home Screen',
  },
  {
    id: 2,
    label: 'About Us',
    onPress: () => navigation.navigate('About Us'),
    icon: <Entypo name="users" size={30} color="white" />,

    routeName: 'About Us',
  },
  {
    id: 3,
    label: 'Contact Us',
    onPress: () => navigation.navigate('Contact Us'),
    icon: <MaterialIcons name="contact-support" size={30} color="white" />,

    routeName: 'Contact Us',
  },
  {
    id: 4,
    label: 'Rate Us',
    onPress: () => Linking.openURL('https://www.youtube.com/'),
    icon: <AntDesign name="star" size={30} color="white" />,

    routeName: 'Rate Us',
  },
  {
    id: 5,
    label: 'Privacy Policy',
    onPress: () => Linking.openURL('https://www.youtube.com/'),
    icon: <MaterialIcons name="policy" size={30} color="white" />,

    routeName: 'Privacy Policy',
  },
  {
    id: 6,
    label: 'Share',
    icon: <Entypo name="share" size={30} color="white" />,

    onPress: () => {
      handleShare();
    },
    routeName: 'Share',
  },
];
