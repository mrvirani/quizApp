import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientScreen from '../../components/organism/GradientScreen';

const { width, height } = Dimensions.get('window');
const slides = [
  {
    id: '1',
    title: 'Welcome to Speedy Browser',
    description: 'Experience fast and secure browsing at your fingertips.',
    image: 'https://picsum.photos/200/300?random=4', // Replace with a relevant image URL for a browser app.
  },
  {
    id: '2',
    title: 'Browse Privately',
    description: 'Enjoy complete privacy with built-in incognito mode.',
    image: 'https://picsum.photos/200/300?random=5', // Replace with a relevant image URL for privacy.
  },
  {
    id: '3',
    title: 'Sync Across Devices',
    description: 'Access your bookmarks and history anywhere, anytime.',
    image: 'https://picsum.photos/200/300?random=6', // Replace with a relevant image URL for synchronization.
  },
  {
    id: '4',
    title: 'Save Data and Time',
    description: 'Compress web pages and save your mobile data.',
    image: 'https://picsum.photos/200/300?random=7', // Replace with a relevant image URL for data-saving.
  },
];


export default function OnboardingScreen() {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width }]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const Pagination = () => {
    return (
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[styles.dot, { width: dotWidth, opacity }]}
            />
          );
        })}
      </View>
    );
  };

  const handleSkip = () => {
    navigation.navigate('LoginScreen');
  };

  const handleDone = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <GradientScreen style={styles.container}>
      <Animated.FlatList
        data={slides} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <Pagination />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSkip} style={[styles.button, styles.skipButton]}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDone} style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -50
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  skipButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
