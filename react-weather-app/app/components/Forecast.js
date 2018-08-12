import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { get7DayForecast } from '../utils/api';
import { convertUnixTimestampToDate, convertKelvinToCelsius } from '../utils/helpers';

function ForecastGrid(props) {
  const { city } = props;
  const { forecast } = props;

  return (
    <React.Fragment>
      <h2 className='forecast-grid__address mm-top title-text title-text--grey'>{`${city.name}, ${city.country}`}</h2>
      <ul className='row forecast-grid__container'>
        {forecast.map((day) => (
          <li key={day.dt}>
            <Link to={{
              pathname: 'forecast/detail',
              search: `?address=${city.name}&dt=${day.dt}`,
              state: { forecast: day }
            }}>
              <ul className='column column--center forecast-grid__day-container'>
                <li>
                  <img src={`../assets/weather-icons/${day.weather[0].icon}.svg`}
                    alt={day.weather[0].description}
                    className='forecast-grid__icon' />
                </li>
                <li>{convertUnixTimestampToDate(day.dt)}</li>
                <li>{convertKelvinToCelsius(day.temp.day)} °C</li>
              </ul>
            </Link>
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
      <div>
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