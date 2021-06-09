import React from "react";
import Button from "./../../components/Button/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  height: 35px;
  padding: 0 15px;
  border: 1px solid gray;
  border-radius: 5px;
  &:focus {
    outline: 2px solid purple;
    border: none;
  }
`;

export default function Login() {
  const history = useHistory();

  function getFormData (event) {
    const [username, password] = Array.from(
      event.target.querySelectorAll("input")
    ).map((item) => item.value);
    
    return [username, password]
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const [ username, password ] = getFormData(event);
    
    const user = {
      username: 'railson',
      password: '12345678',
    }

    if (user.username === username && user.password === password) {
      history.push('/home')
    } else {
      alert('Usuário ou senha inválida!')
    }
  };

  return (
    <>
      <BoxWrapper>
        <Form onSubmit={handleLogin}>
          <label>Login</label>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Senha" />
          <Button value="Entrar" />
        </Form>
      </BoxWrapper>
    </>
  );
}
