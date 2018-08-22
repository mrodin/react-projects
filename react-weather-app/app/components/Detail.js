import React from 'react';
import {
  convertUnixTimestampToDate,
  convertKelvinToCelsius,
  capitalizeFirstLetter
} from '../utils/helpers';

export default function Detail(props) {
  const { city } = props.location.state;
  const { forecast } = props.location.state;
  
  return (
    <ul className='column column--center text'>
      <li>
        <img src={`../assets/weather-icons/${forecast.weather[0].icon}.svg`}
          alt={forecast.weather[0].description}
          className='forecast-icon mm-top' />
      </li>
      <li>{convertUnixTimestampToDate(forecast.dt)}</li>
      <li className='text--important mm-top'>{`${city.name}, ${city.country}`}</li>
      <li>{capitalizeFirstLetter(forecast.weather[0].description)}</li>
      <li>{`Min temp: ${convertKelvinToCelsius(forecast.temp.min)}`}</li>
      <li>{`Max temp: ${convertKelvinToCelsius(forecast.temp.max)}`}</li>
      <li>{`Humidity: ${forecast.humidity}`}</li>
    </ul>
  )
}