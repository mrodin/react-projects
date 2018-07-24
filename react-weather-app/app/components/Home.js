import React from 'react';
import AddressForm from './AddressForm';

export default function Home() {
  return (
    <div className='home__container column column--center'>
      <div className='home__hint'>Enter a City and State</div>
      <AddressForm />
    </div>
  )
}