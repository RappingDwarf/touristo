fetch('https://schulferien.org/api/v1/Ferien/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Apikey': 'Ihr API-Schlüssel'
  }
})
.then((response) => response.json())
.then((json) => {
  // Beispiel-Daten
  let land = "Deutschland";
  let startDatum = "2023-06-13";
  let endDatum = "2023-06-20";

  // Überprüfe, ob das angegebene Land in den Daten vorhanden ist
  if (json[land]) {
    let ferien = json[land].filter(ferien => (ferien.start >= startDatum && ferien.start <= endDatum) || (ferien.end >= startDatum && ferien.end <= endDatum));
    if (ferien.length > 0) {
      console.log(`Im Zeitraum vom ${startDatum} bis zum ${endDatum} sind in ${land} Schulferien.`);
    } else {
      console.log(`Im Zeitraum vom ${startDatum} bis zum ${endDatum} sind in ${land} keine Schulferien.`);
    }
  } else {
    console.log(`Keine Daten für das angegebene Land gefunden.`);
  }
})
.catch((error) => {
  console.error(error);
});
