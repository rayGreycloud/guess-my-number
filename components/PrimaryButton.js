import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary700 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2 // android only
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden' // android only
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
});
