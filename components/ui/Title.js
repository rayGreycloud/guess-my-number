import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const Title = ({ children, titleColor }) => {
  const titleStyles = {
    ...styles.title,
    color: titleColor,
    borderColor: titleColor
  };
  return <Text style={titleStyles}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12
  }
});
