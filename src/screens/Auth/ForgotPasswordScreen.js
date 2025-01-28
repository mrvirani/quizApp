import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Matrics} from '../../constants';
import CustomButton from '../../components/atoms/CustomButton';
import Header from '../../components/atoms/Header';
import InputText from '../../components/atoms/InputText';
import {keyboardVerticalOffset, validateEmail} from '../../utils/utils';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState();
  const handleSendCode=()=>{}
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: Matrics.vs(100)}}>
          <Text style={styles.titleText}>Reset Password</Text>
          <Text style={styles.descriptionText}>
            Enter Your Email to receive a verification {'\n'} code
          </Text>
          <InputText
            value={email}
            onChangeText={setEmail}
            placeholder="Email address"
            validation={validateEmail}
            errorMessage="Invalid email address"
            inputContainer={{marginTop: Matrics.vs(24)}}
          />
          <CustomButton title={'Send code'} style={{marginVertical:20}} onPress={handleSendCode} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;

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
  inputText: {
    paddingVertical: Matrics.vs(12),
    paddingHorizontal: Matrics.s(6),
    color: 'black',
  },
  button: {
    flex: 1,
    paddingVertical: Matrics.vs(10),
    borderRadius: 10,
    backgroundColor: 'blue',
    marginVertical: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
