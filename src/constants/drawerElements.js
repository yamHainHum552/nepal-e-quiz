import {Share, Linking} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Snackbar from 'react-native-snackbar';

// Share function
const handleShare = async () => {
  const appLink =
    'https://play.google.com/store/apps/details?id=com.yamguragain.quiz';
  const shareMessage = `Hey! Check out this Nepali Quiz app: Nepal-e-Quiz. It's a fun way to test your knowledge of Nepal! Download now: ${appLink}`;

  try {
    const result = await Share.share({
      message: shareMessage,
    });

    if (result.action === Share.sharedAction) {
      console.log('Shared successfully');
      Snackbar.show({
        text: 'Thank you for sharing!',
        backgroundColor: 'green',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (result.action === Share.dismissedAction) {
      console.log('Share dialog dismissed');
      Snackbar.show({
        text: 'Share cancelled',
        backgroundColor: 'orange',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  } catch (error) {
    console.error('Share error:', error);
    Snackbar.show({
      text: 'An error occurred while trying to share the app.',
      backgroundColor: 'red',
      duration: Snackbar.LENGTH_SHORT,
    });
  }
};

// Updated drawerElements with navigation passed
export const drawerElements = navigation => [
  {
    id: 1,
    label: 'Home',
    onPress: () => navigation.navigate('Home Screen', {screen: 'Home'}),
    icon: <Entypo name="home" size={30} color="white" />,
    routeName: 'Home Screen',
  },
  {
    id: 2,
    label: 'About Us',
    onPress: () => navigation.navigate('About'),
    icon: <Entypo name="users" size={30} color="white" />,
    routeName: 'About',
  },
  {
    id: 3,
    label: 'Contact Us',
    onPress: () => navigation.navigate('Contact'),
    icon: <MaterialIcons name="contact-support" size={30} color="white" />,
    routeName: 'Contact',
  },
  {
    id: 4,
    label: 'Rate Us',
    onPress: () =>
      Linking.openURL(
        'https://play.google.com/store/apps/details?id=com.yamguragain.quiz&showAllReviews=true',
      ),
    icon: <AntDesign name="star" size={30} color="white" />,
    routeName: 'Rate Us',
  },
  {
    id: 5,
    label: 'Privacy Policy',
    onPress: () =>
      Linking.openURL('https://sites.google.com/view/nepal-e-quiz/home'),
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
