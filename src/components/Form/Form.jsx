import React from "react";
import styled from "styled-components";
import P from 'prop-types';

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

export default function Form({ onSubmit, inputsRefs, role }) {
  console.log('FORM CHAMADO')
  return (
    <form onSubmit={onSubmit} role={role}>
      <InputWrapper>
        <Input inputRef={inputsRefs[0]} id="grossSalary" placeholder="Salário bruto" />
        <Input inputRef={inputsRefs[1]} id="nDependents" placeholder="Número de dependentes" />
        <Input inputRef={inputsRefs[2]} id="otherDiscounts" placeholder="Outros Descontos" />
      </InputWrapper>
      <ButtonWrapper>
        <Button value="Calcular" />
      </ButtonWrapper>
    </form>
  );
}

Form.defaultProps = {
  role: ''
}

Form.propTypes = {
  onSubmit: P.func.isRequired,
  role: P.string
}
