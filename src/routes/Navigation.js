import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/Auth/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import OnBoardingScreen from '../screens/OnBoarding/OnBoardingScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import SearchScreen from '../screens/Dashboard/SearchScreen';

const BottomTab = createBottomTabNavigator();
export const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}} initialRouteName='HomeScreen'>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="SearchScreen" component={SearchScreen} />
    </BottomTab.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();
export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  );
};

const Navigation = () => {
  const AppStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthStack">
        <AppStack.Screen name="AuthStack" component={AuthStackScreen} />
        <AppStack.Screen name="BottomTab" component={BottomTabScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
