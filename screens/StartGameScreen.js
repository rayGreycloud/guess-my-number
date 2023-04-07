import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const confirmInputHandler = () => {
    console.log(enteredNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredNumber}
        onChangeText={numberInputHandler}
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4, // android only
    shadowColor: 'black', // ios only
    shadowOffset: { width: 0, height: 2 }, // ios only
    shadowRadius: 6, // ios only
    shadowOpacity: 0.26 // ios only
  },
  numberInput: {
    height: 50,
    width: 60,
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    color: '#ddb52f',
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1
  }
});
