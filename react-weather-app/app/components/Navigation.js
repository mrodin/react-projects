import React from 'react';

export default function Navigation() {
  return (
    <nav>
      <ul className='app-title'>
        <li><a href="#">React Weather App</a></li>
      </ul>
      <ul className='menu'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}