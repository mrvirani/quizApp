import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors, Matrics} from '../../constants';

const InputText = ({
  value,
  onChangeText,
  placeholder,
  validation = () => true,
  errorMessage = 'Invalid input',
  inputContainer,
  ...props
}) => {
  const [validationMessage, setValidationMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  // const handleChange = text => {
  //   onChangeText(text);
  //   const validationResult = validation(text);
  //   setIsValid(validationResult.isValid);
  //   setValidationMessage(validationResult.message);
  // };

  const handleChange = text => {
    onChangeText(text);
    setIsValid(validation(text));
  };

  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={[styles.input,inputContainer, !isValid && styles.errorInput]}
        {...props}
      />
      {!isValid && (
        <Text style={styles.errorText}>
          {validationMessage || errorMessage}
        </Text>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {},
  input: {
    paddingVertical: Matrics.vs(12),
    paddingHorizontal: Matrics.s(16),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'black',
  },
  errorInput: {
    borderColor: Colors.error_toast,
  },
  errorText: {
    color: Colors.error_toast,
    fontSize: 12,
    marginTop: 4,
  },
});
