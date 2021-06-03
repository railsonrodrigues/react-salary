import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  margin-bottom: 50px;
`;

const Logo = styled.h1`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 25px;
  font-size: 18px;
  font-weight: 400;
  font-family: sans-serif;
  color: #fff;
`;

const Purple = styled.span`
  color: #ce19e6;
`;

const NavBar = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100vw;
  height: 100px;
  background: #1c1c1c;
`

const Menu = styled.li`
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #fff;
  opacity: 0.4;
  transition-duration: 200ms;
  &:hover {
    opacity: 1;
  }
`

export default function TopMenu ({ pathname }) {
  if (pathname === '/home' || pathname === '/account' || pathname === '/about-me') {
    return (
      <NavWrapper>
        <NavBar>
          <Logo>Railson<Purple>Calc</Purple></Logo>
          <Link to="/home"><Menu>Início</Menu></Link>
          <Link to="/about-me"><Menu>Sobre mim</Menu></Link>
          <Link to="/account"><Menu>Conta</Menu></Link>
          <Link to="/"><Menu>Logout</Menu></Link>
        </NavBar>
      </NavWrapper>
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