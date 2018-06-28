export async function getCurrentWeather(address) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${address}&type=accurate&APPID=70a046fe2789d2e4e3bb919260264d96`);
  return response.json();
}