import React from 'react';
import AddressForm from './AddressForm';

class Home extends React.Component {
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
      <div className='home-wrapper'>
        <div className='form-wrapper'>
          <div className='hint'>Enter a City and State</div>
          <AddressForm />
        </div>
      </div>
    )
  }
}

export default Home;