import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

import generateRandomNumberBetween from '../utils/random';

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title titleColor={'white'}>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Is it too high or too low?</Text>
      </View>
      <View>
        <Text>Rounds</Text>
        {/** Log Rounds */}
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 12
  }
});
