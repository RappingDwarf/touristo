import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/Buttons';
import Dropdown from './components/Dropdown';

export default function App() {
  const handleButtonPress = () => {
    console.log('Button wurde geklickt!');
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomButton onPress={handleButtonPress} title="Klick mich!" />
      <Dropdown />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
