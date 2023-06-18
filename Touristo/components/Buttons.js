import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: 350,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0085FF', // Beispielhafte Hintergrundfarbe
  },
  buttonText: {
    color: '#FFFFFF', // Beispielhafte Textfarbe
    fontSize: 20,
  },
});

export default CustomButton;
