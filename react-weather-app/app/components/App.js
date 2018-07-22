import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Forecast from './Forecast';

export default function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />} />
          <Route path='/forecast' component={Forecast} />
          <Route render={() => <p>Page not Found</p>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}