import React from 'react';
import AddressForm from './AddressForm';

export default function Home() {
  return (
    <div className='home-container column column--center'>
      <p className='text text--important text--white'>Enter a City and State</p>
      <AddressForm direction={'column column--center'} />
    </div>
  )
}