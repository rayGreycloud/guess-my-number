import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View
} from 'react-native';

import Card from '../components/ui/Card';
import InputLabel from '../components/ui/InputLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { height } = useWindowDimensions();

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    const chosenNumberType = typeof chosenNumber;

    if (
      chosenNumberType !== 'number' ||
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const marginTopValue = height < 400 ? 0 : 48;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopValue }]}>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center'
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
