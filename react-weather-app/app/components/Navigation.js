import React from 'react';
import AddressForm from './AddressForm';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='nav row'>
      <div className='nav__title'>
        <Link
          className='nav__link'
          to={{
            pathname: '/'
          }}>
          React Weather App
        </Link>
      </div>
      <AddressForm direction={'row'} />
    </nav>
  )
}