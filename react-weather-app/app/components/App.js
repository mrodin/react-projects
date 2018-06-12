import React from 'react';
import Navigation from './Navigation';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Navigation />
        <Home />
      </div>
    )
  }
}

export default App;