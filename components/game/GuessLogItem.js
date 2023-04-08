import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

const GuessLogItem = ({ guessNumber, roundNumber }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Guess: {guessNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
    padding: 12,
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  itemText: {
    fontFamily: 'open-sans'
  }
});
