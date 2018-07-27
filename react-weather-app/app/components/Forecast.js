import React from 'react';
import queryString from 'query-string';
import Loader from './Loader';
import { getCurrentWeather } from '../utils/api';

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

    const forecast = await getCurrentWeather(address);
    this.setState(() => { return { forecast: forecast } });
  }

  render() {
    const { forecast } = this.state;

    return (
      <div>
        {!forecast ? <Loader /> : <p>Loading finished.</p>}
      </div>
    )
  }
}

export default Forecast;