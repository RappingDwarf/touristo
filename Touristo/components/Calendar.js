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

  const generateDateRange = (start, end) => {
    const dates = {};
    let currentDate = new Date(start);
    const endDate = new Date(end);
    while (currentDate <= endDate) {
      dates[currentDate.toISOString().split('T')[0]] = { color: '#0085FF' };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  return (

      <Calendar
        markingType={'period'}
        onDayPress={onDayPress}
        markedDates={{
          ...generateDateRange(startDateLocal, endDateLocal),
          [startDateLocal]: { startingDay: true, color: '#0085FF' },
          [endDateLocal]: { endingDay: true, color: '#0085FF' },
        }}
      />

  );
};