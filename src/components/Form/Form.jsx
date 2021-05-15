import React from 'react';
import './../../globalStyles.css';

import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form({ onSubmit, className }) {
  return (
    <form onSubmit={onSubmit} className={className}>
      <Input id="grossSalary" placeholder="Salário bruto" />
      <Input id="nDependents" placeholder="Número de dependentes" />
      <Input id="otherDiscounts" placeholder="Outros Descontos" />
      <Button value="Calcular" />
    </form>
  );
}
