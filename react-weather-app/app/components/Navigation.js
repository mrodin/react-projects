import React from 'react';
import AddressForm from './AddressForm';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='nav row'>
      <h1 className='text text--title'>
        <Link
          className='text--white'
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