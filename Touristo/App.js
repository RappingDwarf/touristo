import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



import CustomButton from './components/Buttons';
import Dropdown from './components/Dropdown';
import Calendar from './components/Calendar';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
