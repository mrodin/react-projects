export async function get7DayForecast(address) {
  const encodedURI = window.encodeURI(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?q=${address}&type=accurate&APPID=70a046fe2789d2e4e3bb919260264d96&cnt=7`);
  const response = await fetch(encodedURI)
    .catch(handleError);
  
  return response.json();
}

function handleError(error) {
  console.warn(error);
  return null;
}