import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const InputLabel = ({ children, style }) => (
  <Text style={[styles.inputLabel, style]}>{children}</Text>
);

export default InputLabel;

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: Colors.accent500
  }
});
