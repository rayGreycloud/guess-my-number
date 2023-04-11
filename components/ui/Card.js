import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // android only
    shadowColor: 'black', // ios only
    shadowOffset: { width: 0, height: 2 }, // ios only
    shadowRadius: 6, // ios only
    shadowOpacity: 0.26 // ios only
  }
});
