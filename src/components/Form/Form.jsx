import React from "react";
import styled from "styled-components";

import Input from "../Input/Input";
import Button from "../Button/Button";

const InputWrapper = styled.div`
  display: flex;
  margin: 15px 0;
  gap: 50px;
`;

const ButtonWrapper = styled.div`
  width: 30%;
  margin: 15px auto;
`;

export default function Form({ onSubmit, role }) {
  return (
    <form onSubmit={onSubmit} role={role}>
      <InputWrapper>
        <Input id="grossSalary" placeholder="Salário bruto" />
        <Input id="nDependents" placeholder="Número de dependentes" />
        <Input id="otherDiscounts" placeholder="Outros Descontos" />
      </InputWrapper>
      <ButtonWrapper>
        <Button value="Calcular" />
      </ButtonWrapper>
    </form>
  );
}
