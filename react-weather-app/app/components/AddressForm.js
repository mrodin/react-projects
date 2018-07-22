import React from 'react';
import { Link } from 'react-router-dom';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState(() => {
      return { address: value }
    });
  }

  render() {
    return (
      <form>
        <input
          id='address'
          placeholder='Brno, Czechia'
          type='text'
          autoComplete='off'
          value={this.state.address}
          onChange={this.handleChange}
        />
        <Link
          className='button'
          to={{
            pathname: '/forecast',
            search: `?address=${this.state.address}`
          }}>
          Get Weather
        </Link>
      </form>
    )
  }
}

export default AddressForm;