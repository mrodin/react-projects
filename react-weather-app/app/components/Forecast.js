import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Loader from './Loader';
import { get7DayForecast } from '../utils/api';

function ForecastGrid(props) {
  const { city } = props;
  const { forecast } = props;

  return (
    <div>
      <h1>{`${city.name}, ${city.country}`}</h1>
      <ul>
        {forecast.map((day) => (
          <li key={day.dt}>
            <ul>
              <li>{day.weather[0].icon}</li>
              <li>{day.dt}</li>
              <li>{day.temp.day}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
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