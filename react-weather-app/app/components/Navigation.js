import React from 'react';
import AddressForm from './AddressForm';

export default function Navigation(props) {
  return (
    <nav>
      <div className='app-title'>
        <a href="#">React Weather App</a>
      </div>
      <AddressForm onSubmit={props.onSubmit} />
    </nav>
  )
}