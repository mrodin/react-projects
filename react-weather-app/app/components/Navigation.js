import React from 'react';

export default function Navigation() {
  return (
    <nav className='flex-container blue-background'>
      <ul className='flex-item flex-start'>
        <li><a href="#">React Weather App</a></li>
      </ul>
      <ul className='flex-container flex-end'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}