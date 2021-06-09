import React from "react";
import Button from "./../../components/Button/Button";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const BoxWrapper = styled.div`
  position: absolute;
  top: 20%;
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 15px 25px;
`;

export default function Login() {
  const history = useHistory();
  
  const handleLogin = () => {
    history.push('/home')
  }

  return (
    <>
      <BoxWrapper>
        <label>Login</label>
        <Button onClick={handleLogin} value="Entrar" />
      </BoxWrapper>
    </>
  );
}
