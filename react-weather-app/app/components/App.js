import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import { getCurrentWeather } from '../utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidUpdate() {
    const forecast = await getCurrentWeather(this.state.address);
    console.log(forecast);
  }

  handleSubmit(address) {
    this.setState(() => ({
      address: address
    }));
  }

  render() {
    return (
      <div className='wrapper'>
        <Navigation onSubmit={this.handleSubmit} />
        <Home onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;