import React from 'react';
import { Link } from 'react-router-dom';

export default function TopMenu ({ pathname }) {
  if (pathname === '/home' || pathname === '/account' || pathname === '/about-me') {
    return (
      <nav>
        <ul>
          <li><Link to="/home">Início</Link></li>
          <li><Link to="/about-me">Sobre mim</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    )
  }

  return (
    <nav>
      <ul>
        <li><Link to="">Login</Link></li>
      </ul>
    </nav>
  )
}