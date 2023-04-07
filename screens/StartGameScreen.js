import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

import Card from '../components/ui/Card';
import InputLabel from '../components/ui/InputLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  console.log('enteredNumber: ', enteredNumber);

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    const chosenNumberType = typeof chosenNumber;

    console.log('chosenNumber: ', chosenNumber);

    if (
      chosenNumberType !== 'number' ||
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      console.log('Input is not a number between 1 and 99.');
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InputLabel>Enter a number between 1 and 99</InputLabel>
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
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48
  },
  numberInput: {
    height: 50,
    width: 60,
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
    color: Colors.accent500,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1
  }
});
