import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Forecast from './Forecast';
import Detail from './Detail';

export default function App() {
  return (
    <BrowserRouter>
      <div className='app-container column'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />} />
          <Route exact path='/forecast' component={Forecast} />
          <Route path='/forecast/detail' component={Detail} />
          <Route render={() => <p>Page not Found</p>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}