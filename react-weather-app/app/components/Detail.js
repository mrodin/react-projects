import React from 'react';
import {
  convertUnixTimestampToDate,
  convertKelvinToCelsius,
  capitalizeFirstLetter
} from '../utils/helpers';

export default function Detail(props) {
  return (
    <ul>
      <li>
        <img src={`../assets/weather-icons/${props.location.state.forecast.weather[0].icon}.svg`}
          alt={props.location.state.forecast.weather[0].description}
          className='forecast-grid__icon' />
      </li>
      <li>{convertUnixTimestampToDate(props.location.state.forecast.dt)}</li>
      <li>{`${props.location.state.city.name}, ${props.location.state.city.country}`}</li>
      <li>{capitalizeFirstLetter(props.location.state.forecast.weather[0].description)}</li>
      <li>{`Min temp: ${convertKelvinToCelsius(props.location.state.forecast.temp.min)}`}</li>
      <li>{`Max temp: ${convertKelvinToCelsius(props.location.state.forecast.temp.max)}`}</li>
      <li>{`Humidity: ${props.location.state.forecast.humidity}`}</li>
    </ul>
  )
}