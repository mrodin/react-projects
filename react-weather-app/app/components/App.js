import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <BrowserRouter>
        <div className='wrapper'>
          <Navigation onSubmit={this.handleSubmit} />
          <Route exact path='/' render={() => <Home onSubmit={this.handleSubmit} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;