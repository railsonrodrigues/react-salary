import React from 'react';
import P from 'prop-types';
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

const LogoutMenu = styled(Menu)`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 5px;
  top: 50%;
  transform: translateY(-50%);
  right: 25px;
  width: max-content;
  height: max-content;
  &::before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url('./logout.png');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
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
          <Link to="/"><LogoutMenu>Logout</LogoutMenu></Link>
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

TopMenu.defaultProps = {
  pathname: ''
}

TopMenu.propTypes = {
  pathname: P.string
}