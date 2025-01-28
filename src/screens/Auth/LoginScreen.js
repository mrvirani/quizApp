import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Matrics} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import InputText from '../../components/atoms/InputText';
import CustomButton from '../../components/atoms/CustomButton';
import {
  keyboardVerticalOffset,
  validateEmail,
  validatePassword,
} from '../../utils/utils';

const LoginScreen = () => {
  const [email, setEmail] = useState('m@gmail.com');
  const [password, setPassword] = useState('Maulik50@');
  const navigation = useNavigation();

  const handleLogin = () => {
    // if (!validateEmail(email)) {
    //   alert('Please enter a valid email address');
    //   return;
    // }
    // if (!validatePassword(password)) {
    //   alert('Password must be at least 6 characters long');
    //   return;
    // };
    // if(email && validateEmail(email) && password && validatePassword){
    navigation.navigate('BottomTab');
    // }
  };

  const handleForgot = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const handleSignUp = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: Matrics.vs(100)}}>
          <Text style={styles.titleText}>Welcome Back!👋</Text>
          <Text style={styles.descriptionText}>
          Access your account to continue exploring {'\n'}the web securely and efficiently.
          </Text>
          <View style={styles.inputContainer}>
            <InputText
              value={email}
              onChangeText={setEmail}
              placeholder="Email address"
              validation={validateEmail}
              errorMessage="Invalid email address"
            />
            <InputText
              value={password}
              onChangeText={setPassword}
              placeholder="Enter Password"
              secureTextEntry
              validation={validatePassword}
              errorMessage="Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character"
            />
          </View>

          <Text style={styles.forgotPasswordText} onPress={handleForgot}>
            Forgot Password?
          </Text>

          <CustomButton title="Login" onPress={handleLogin} />

          <Text style={styles.staticText}>
            Don't have an account?{' '}
            <Text onPress={handleSignUp} style={styles.signUpText}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Matrics.s(16),
  },
  titleText: {
    color: 'black',
    fontSize: 28,
  },
  descriptionText: {
    color: 'gray',
    fontSize: 16,
  },
  inputContainer: {
    gap: 14,
    marginTop: Matrics.vs(28),
  },
  forgotPasswordText: {
    color: 'blue',
    marginVertical: 10,
    alignSelf: 'flex-end',
    marginRight: 8,
  },
  button: {
    paddingVertical: Matrics.vs(12),
    borderRadius: 10,
    backgroundColor: 'black',
    marginVertical: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  staticText: {
    color: 'gray',
    marginVertical: Matrics.vs(10),
    alignSelf: 'center',
  },
  signUpText: {
    color: 'blue',
  },
});
