import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 50px;
  border: 1px solid red;
`

const Menu = styled.li`
  display: inline-block;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  &:hover {
    background: red;
  }
`

export default function TopMenu ({ pathname }) {
  if (pathname === '/home' || pathname === '/account' || pathname === '/about-me') {
    return (
      <nav>
        <NavBar>
          <Link to="/home"><Menu>Início</Menu></Link>
          <Link to="/about-me"><Menu>Sobre mim</Menu></Link>
          <Link to="/account"><Menu>Conta</Menu></Link>
          <Link to="/"><Menu>Logout</Menu></Link>
        </NavBar>
      </nav>
    )
  }

  return (
    <nav>
      <NavBar>
        <Menu><Link to="/login">Login</Link></Menu>
      </NavBar>
    </nav>
  )
}