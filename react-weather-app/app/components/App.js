import React from 'react';
import Navigation from './Navigation';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(address) {
    this.setState(() => ({
      address: address
    }));
  }

  render() {
    return (
      <div className='wrapper'>
        <Navigation />
        <Home onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;