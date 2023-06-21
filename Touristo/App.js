import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomButton from './components/Buttons';
import Dropdown from './components/Dropdown';
import Calendar from './components/Calendar';

const Stack = createStackNavigator();

function SearchScreen() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigation = useNavigation();

  const handleButtonPress = async () => {
    console.log('Ausgewähltes Land:', selectedCountry);
    landcode = selectedCountry;
    console.log('Startdatum:', startDate);
    console.log('Enddatum:', endDate);

    const url = `https://openholidaysapi.org/SchoolHolidays?countryIsoCode=${landcode[0]}&languageIsoCode=${landcode[0]}&validFrom=${startDate}&validTo=${endDate}&subdivisionCode=DE-MV`;

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // Hier kannst du die Antwort der API auswerten
      console.log(data);
      navigation.navigate('Results', { results: data });
    } else {
      console.error(`Fehler: ${response.status}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Touristo</Text>
      <View style={{ zIndex: 1 }}>
        <Dropdown setSelectedCountry={setSelectedCountry} />
      </View>
      <Calendar setStartDate={setStartDate} setEndDate={setEndDate} />
      <CustomButton onPress={handleButtonPress} title="Klick mich!" />
    </View>
  );
}

function ResultsScreen({ route }) {
  const { results } = route.params;

  return (
    <View style={styles.container}>
      <Text>Ergebnisse</Text>
      {results.map((result, index) => (
        <Text key={index}>{JSON.stringify(result)}</Text>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
