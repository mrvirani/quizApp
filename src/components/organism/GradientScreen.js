import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../constants';

const GradientScreen = ({children, style, ...props}) => {
  const inset = useSafeAreaInsets();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={
          Platform.OS === 'ios' ? Colors.transparent : 'gray'
        }
      />{children}
      {/* <LinearGradient
        colors={['#000000', '#FFFFFF']} // Black to White gradient
        style={[
          styles.container,
          {paddingBottom: inset.bottom !== 0 ? inset.bottom : 15},
          style,
        ]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0, 0.7]} // Adjust the location of the gradient
      >
        {children}
      </LinearGradient> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientScreen;
