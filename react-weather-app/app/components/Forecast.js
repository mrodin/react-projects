import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Loader from './Loader';
import { get7DayForecast } from '../utils/api';
import { convertUnixTimestampToDate, convertKelvintoCelsius } from '../utils/helpers';

function ForecastGrid(props) {
  const { city } = props;
  const { forecast } = props;

  return (
    <React.Fragment>
      <h1 className='forecast-grid__address mm-top'>{`${city.name}, ${city.country}`}</h1>
      <ul className='row forecast-grid__container mm-top'>
        {forecast.map((day) => (
          <li key={day.dt}>
            <ul>
              <li>
                <img src={`../assets/weather-icons/${day.weather[0].icon}.svg`}
                  alt={day.weather[0].description} />
              </li>
              <li>{convertUnixTimestampToDate(day.dt)}</li>
              <li>{convertKelvintoCelsius(day.temp.day)} °C</li>
            </ul>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

ForecastGrid.propTypes = {
  city: PropTypes.object.isRequired
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    }

    this.getForecast = this.getForecast.bind(this);
  }

  componentDidMount() {
    const { address } = queryString.parse(this.props.location.search);

    this.getForecast(address);
  }

  async getForecast(address) {
    // reset forecast to null before fetching new data
    this.setState(() => { return { forecast: null } });

    const forecast = await get7DayForecast(address);
    this.setState(() => { return { forecast: forecast } });
  }

  render() {
    const { forecast } = this.state;

    return (
      <div className='forecast__container'>
        {!forecast
          ? <Loader />
          : <ForecastGrid
            city={forecast.city}
            forecast={forecast.list} />}
      </div>
    )
  }
}

export default Forecast;