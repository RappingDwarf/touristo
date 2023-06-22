import React from 'react';
import { Calendar } from 'react-native-calendars';

export default function HolidaysCalendar({ holidays }) {
  const generateHolidays = (holidays) => {
    const dates = {};
    holidays.forEach((holiday) => {
      dates[holiday.date] = { color: '#0085FF' };
    });
    return dates;
  }

  return (
    <Calendar
      markingType={'period'}
      markedDates={generateHolidays(holidays)}
    />
  );
}