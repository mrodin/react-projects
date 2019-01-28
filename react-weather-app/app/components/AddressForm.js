import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState(() => {
      return { address: value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.address != '') {
      this.setState(() => {
        return { redirect: true }
      });
    }
  }

  render() {
    if (this.state.redirect) {
      this.setState(() => {
        return { redirect: false }
      })

      return <Redirect push to={{
        pathname: '/forecast',
        search: `?address=${this.state.address}`
      }} />
    }

    return (
      <div className='column column--center'>
        <form className={this.props.direction} onSubmit={this.handleSubmit}>
          <input
            className='address-form__input'
            id='address'
            placeholder='Brno, CZ'
            type='text'
            autoComplete='off'
            value={this.state.address}
            onChange={this.handleChange}
          />
          <button type='submit' className='address-form__button'>Get Weather</button>
        </form>
      </div>
    )
  }
}

AddressForm.propTypes = {
  direction: PropTypes.string.isRequired
}

export default AddressForm;