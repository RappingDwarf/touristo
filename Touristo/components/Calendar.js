import React, {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function DatePicker(){

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    console.log(startDate);
    console.log(endDate);
  }, [startDate, endDate]);

  const onDayPress = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate('');
    } else {
      setEndDate(day.dateString);
      checkHolidays();
    }
    
    
  }

  

  const checkHolidays = async () => {
    // Hier musst du deinen API-Schlüssel eintragen
    console.log(startDate)
    console.log(endDate)
    const url = `https://openholidaysapi.org/PublicHolidays?countryIsoCode=DE&languageIsoCode=DE&validFrom=${startDate}&validTo=${endDate}&subdivisionCode=DE-BE`;
    
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // Hier kannst du die Antwort der API auswerten
      console.log(data);
    } else {
      console.error(`Fehler: ${response.status}`);
    }
  }
  

  return (
    <Calendar
      markingType={'period'}
      onDayPress={onDayPress}
      markedDates={{
        [startDate]: {startingDay: true, color: 'green'},
        [endDate]: {endingDay: true, color: 'green'},
      }}
    />
  );
};

