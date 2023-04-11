import { Platform, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const Title = ({ children, style }) => {
  const customStyles = {
    ...style,
    color: style?.color ? style.color : Colors.accent500,
    borderColor: style?.color ? style.color : Colors.accent500
  };

  return <Text style={[styles.title, customStyles]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12
  }
});
