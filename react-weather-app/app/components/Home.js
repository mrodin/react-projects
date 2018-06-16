import React from 'react';
import CityStateForm from './CityStateForm';

class Home extends React.Component {
  render() {
    return (
      <div className='home-wrapper'>
        <div className='form-wrapper'>
          <div className='hint'>Enter a City and State</div>
          <CityStateForm />
        </div>
      </div>
    )
  }
}

export default Home;