async function getHolidays(startDate, endDate, countries) {
    const holidays = [];
    // Hier rufst du die API auf und speicherst die Ergebnisse in einer Variable
    const apiResults = await callHolidaysApi(startDate, endDate, countries);
    // Hier konvertierst du die Ergebnisse der API in das gewünschte Format
    apiResults.forEach((result) => {
      holidays.push({
        date: result.date,
        name: result.name,
        country: result.country,
      });
    });
    return holidays;
  }