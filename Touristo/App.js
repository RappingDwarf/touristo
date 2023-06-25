import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getHolidays } from './components/api';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, Row } from 'react-native-table-component';

import CustomButton from './components/Buttons';
import Dropdown from './components/Dropdown';
import Calendar from './components/Calendar';
import HolidaysCalendar from './components/HolidaysCalendar';

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

    const url = `https://openholidaysapi.org/SchoolHolidays?countryIsoCode=${landcode[0]}&languageIsoCode=&validFrom=${startDate}&validTo=${endDate}&subdivisionCode=`;

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // Hier kannst du die Antwort der API auswerten
      console.log(data);
      navigation.navigate('Ergebnisse', { results: data });
    } else {
      console.error(`Fehler: ${response.status}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 1 }}>
        <Dropdown setSelectedCountry={setSelectedCountry} />
      </View>
      <Calendar setStartDate={setStartDate} setEndDate={setEndDate} />
      <CustomButton onPress={handleButtonPress} title="Suchen" />
    </View>
  );
}

function ResultsScreen({ route }) {
  const { results } = route.params;
  const holidays = results;

  const tableHead = ['Name', 'Startdatum', 'Enddatum', 'Typ'];
  const tableData = results.map((result) => [
    `${result.name[0].text} (${result.subdivisions[0].shortName})`,
    result.startDate,
    result.endDate,
    result.type,
  ]);
  

  return (
    <View style={resultstyle.container}>
      <Text>Ergebnisse</Text>
      <ScrollView>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {tableData.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              textStyle={styles.text}
            />
          ))}
        </Table>
      </ScrollView>
      {/* <HolidaysCalendar holidays={holidays} /> */}
    </View>
  );
}

const resultstyle = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Suchen" component={SearchScreen} />
        <Stack.Screen name="Ergebnisse" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  /*
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  */
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 50
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
});
