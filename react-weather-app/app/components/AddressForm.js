import React from 'react';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
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
    
    this.props.onSubmit(this.state.address);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id='address'
          placeholder='Brno, Czechia'
          type='text'
          autoComplete='off'
          value={this.state.address}
          onChange={this.handleChange}
        />
        <button
          type='submit'
          disabled={!this.state.address}
        >
          Get Weather
        </button>
      </form>
    )
  }
}

export default AddressForm;