import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  keyboardVerticalOffset,
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/utils';
import InputText from '../../components/atoms/InputText';
import CustomButton from '../../components/atoms/CustomButton';
import {Matrics} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const [firstname, setFirstname] = useState('Virani');
  const [middlename, setMiddlename] = useState('Maulik');
  const [lastname, setLastname] = useState('Arvindbhai');
  const [email, setEmail] = useState('m@gmail.com');
  const [password, setPassword] = useState('Maulik50@');
  const [confirmPassword, setConfirmPassword] = useState('Maulik50@');
  const navigation = useNavigation();
  
  const handleRegister = () => {
    if (
      validateName(firstname) &&
      validateName(lastname) &&
      validateEmail(email) &&
      validatePassword(password) &&
      password === confirmPassword
    ) {
      console.log('Registration successful');
      navigation.navigate('BottomTabScreen')
    } else {
      Alert.alert(
        'Registration Failed',
        'Please ensure all fields are correctly filled:\n\n' +
          `${!validateName(firstname) ? '- Invalid First Name\n' : ''}` +
          `${!validateName(lastname) ? '- Invalid Last Name\n' : ''}` +
          `${!validateEmail(email) ? '- Invalid Email Address\n' : ''}` +
          `${!validatePassword(password) || !password ? '- Weak Password\n' : ''}` +
          `${
            password !== confirmPassword ? '- Passwords do not match\n' : ''
          }`.trim()
      );
    }
  };

  const handleSignIn = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: Matrics.vs(100)}}>
          <Text style={styles.titleText}>Join Us! 🌟</Text>
          <Text style={styles.descriptionText}>
            Create your account to start your journey on {'\n'}our
            browser-based app!
          </Text>
          <View style={styles.inputContainer}>
            <InputText
              value={firstname}
              onChangeText={setFirstname}
              placeholder="First Name"
              validation={validateName}
              errorMessage="Invalid or empty first name"
            />

            <InputText
              value={middlename}
              onChangeText={setMiddlename}
              placeholder="Middle Name (Optional)"
              validation={() => true} // Optional field
            />

            <InputText
              value={lastname}
              onChangeText={setLastname}
              placeholder="Last Name"
              validation={validateName}
              errorMessage="Invalid or empty last name"
            />

            <InputText
              value={email}
              onChangeText={setEmail}
              placeholder="Email Address"
              validation={validateEmail}
              errorMessage="Invalid email address"
            />

            <InputText
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
              validation={validatePassword}
              errorMessage="Password must be 8+ characters with uppercase, lowercase, number, and special character"
            />

            <InputText
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
              validation={text => text === password}
              errorMessage="Passwords do not match"
            />
          </View>
        </View>
        <CustomButton title="Register" onPress={handleRegister} style={{marginVertical:20}} />

        <Text style={styles.staticText}>
          Already have an account?{' '}
          <Text onPress={handleSignIn} style={styles.signInText}>
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
  staticText: {
    color: 'gray',
    alignSelf: 'center',
  },
  signInText: {
    color: 'blue',
  },
});
