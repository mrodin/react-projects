import React from 'react';
import AddressForm from './AddressForm';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='nav row'>
      <h1 className='nav__title'>
        <Link
          className='nav__link'
          to={{
            pathname: '/'
          }}>
          React Weather App
        </Link>
      </h1>
      <AddressForm direction={'row'} />
    </nav>
  )
}