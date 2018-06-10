import React from 'react';

export default function Navigation() {
  return (
    <nav className='flexContainer blueBackground'>
      <ul className='nav flexItem flexStart'>
        <li><a href="#">Company Name</a></li>
      </ul>
      <ul className='nav flexContainer flexEnd'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}