import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/Title';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/** guess */}
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
