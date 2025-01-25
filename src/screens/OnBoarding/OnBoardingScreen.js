// import React from 'react';
// import PaperOnboarding, {
//   PaperOnboardingItemType,
// } from '@gorhom/paper-onboarding';
// import {View, Text, Image} from 'react-native';

// const data = [
//   {
//     title: 'Welcome to QuizMaster!',
//     description: 'Test your knowledge with fun and challenging quizzes!',
//     backgroundColor: '#FF6F61',
//     image: (
//       <Image
//         source={{uri: 'https://picsum.photos/200/300'}}
//         style={{width: 200, height: 200}}
//       />
//     ),
//     icon: (
//       <Image
//         source={{uri: 'https://picsum.photos/200/300'}}
//         style={{width: 50, height: 50}}
//       />
//     ),
//     content: (
//       <View>
//         <Text
//           style={{
//             fontSize: 16,
//             color: '#fff',
//             textAlign: 'center',
//             marginTop: 10,
//           }}>
//           Swipe to learn how it works!
//         </Text>
//       </View>
//     ),
//   },
//   {
//     title: 'Choose Your Topic',
//     description:
//       'Select from a wide variety of topics to start your quiz journey.',
//     backgroundColor: '#4CAF50',
//     image: (
//       <Image
//         source={{uri: 'https://picsum.photos/200/300'}}
//         style={{width: 200, height: 200}}
//       />
//     ),
//     icon: (
//       <Image
//         source={{uri: 'https://picsum.photos/200/300'}}
//         style={{width: 50, height: 50}}
//       />
//     ),
//     content: (
//       <View>
//         <Text
//           style={{
//             fontSize: 16,
//             color: '#fff',
//             textAlign: 'center',
//             marginTop: 10,
//           }}>
//           Find topics ranging from Science to Pop Culture!
//         </Text>
//       </View>
//     ),
//   },
//   {
//     title: 'Compete & Win',
//     description: 'Challenge friends and climb the leaderboard!',
//     backgroundColor: '#2196F3',
//     image: (
//       <Image
//         source={{uri: 'https://picsum.photos/200/300'}}
//         style={{width: 200, height: 200}}
//       />
//     ),
//     icon: (
//       <Image
//         source={{uri: 'https://picsum.photos/200/300'}}
//         style={{width: 50, height: 50}}
//       />
//     ),
//     content: (
//       <View>
//         <Text
//           style={{
//             fontSize: 16,
//             color: '#fff',
//             textAlign: 'center',
//             marginTop: 10,
//           }}>
//           Stay motivated by earning points and badges.
//         </Text>
//       </View>
//     ),
//   },
// ];

// const OnBoardingScreen = ({navigation}) => {
//   const handleOnClosePress = () => {
//     console.log('Navigating to login screen');
//     navigation.replace('LoginScreen'); // Replace with your login screen navigation logic
//   };

//   return (
//     <PaperOnboarding data={data} onCloseButtonPress={handleOnClosePress} />
//   );
// };

// export default OnBoardingScreen;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnBoardingScreen = () => {
  return (
    <View>
      <Text>OnBoardingScreen</Text>
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})