import React from 'react';
import AddressForm from './AddressForm';

export default function Home() {
  return (
    <div className='home-wrapper'>
      <div className='form-wrapper'>
        <div className='hint'>Enter a City and State</div>
        <AddressForm />
      </div>
    </div>
  )
}