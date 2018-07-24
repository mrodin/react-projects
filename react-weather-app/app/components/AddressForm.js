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
      <div className='column column--center'>
        <form className='column column--center'>
          <input
            className='address-form__input'
            id='address'
            placeholder='Brno, Czechia'
            type='text'
            autoComplete='off'
            value={this.state.address}
            onChange={this.handleChange}
          />
          <Link
            className='address-form__button'
            to={{
              pathname: '/forecast',
              search: `?address=${this.state.address}`
            }}>
            Get Weather
        </Link>
        </form>
      </div>
    )
  }
}

export default AddressForm;