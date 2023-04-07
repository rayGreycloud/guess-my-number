import React from 'react';
import { Alert, View, Text, StyleSheet } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ resetGameHandler, userNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your number was {userNumber}</Text>
      <PrimaryButton onPress={resetGameHandler}>New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24
  }
});
