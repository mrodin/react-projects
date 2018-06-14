import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='home-wrapper'>
        <div className='form-wrapper'>
          <div className='hint'>Enter a City and State</div>
          <form>
            <input type='text' />
            <button>Get Weather</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;