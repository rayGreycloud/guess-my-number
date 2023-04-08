import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

import Colors from '../constants/colors';

const GameOverScreen = ({ onStartNewGame, roundsNumber, userNumber }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.text}>
        Your phone need<Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center'
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});
