import React from 'react';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render() {
    return (
      <form>
        <input
          id='address'
          placeholder='Brno, Czechia'
          type='text'
          autoComplete='off'
        />
        <button>Get Weather</button>
      </form>
    )
  }
}

export default AddressForm;