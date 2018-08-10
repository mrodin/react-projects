export function convertUnixTimestampToDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

export function convertKelvinToCelsius(temp) {
  return Math.round(temp - 273.15);
}