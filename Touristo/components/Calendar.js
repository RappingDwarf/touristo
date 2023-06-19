import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';

export default function DatePicker({ setStartDate, setEndDate }) {
  const [startDateLocal, setStartDateLocal] = useState('');
  const [endDateLocal, setEndDateLocal] = useState('');

  useEffect(() => {
    setStartDate(startDateLocal);
    setEndDate(endDateLocal);
  }, [startDateLocal, endDateLocal]);

  const onDayPress = (day) => {
    if (!startDateLocal || (startDateLocal && endDateLocal)) {
      setStartDateLocal(day.dateString);
      setEndDateLocal('');
    } else {
      setEndDateLocal(day.dateString);
    }
  }

  return (
    <Calendar
      markingType={'period'}
      onDayPress={onDayPress}
      markedDates={{
        [startDateLocal]: { startingDay: true, color: 'green' },
        [endDateLocal]: { endingDay: true, color: 'green' },
      }}
    />
  );
};