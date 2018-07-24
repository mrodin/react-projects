import React from 'react';
import AddressForm from './AddressForm';

export default function Navigation(props) {
  return (
    <nav className='nav row'>
      <div className='nav__title'>
        <a href="#" className='nav__link'>React Weather App</a>
      </div>
      <AddressForm />
    </nav>
  )
}