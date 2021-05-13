import React, { Component } from 'react';
import SubmitButton from './components/SubmitButton';
import Graphic from './components/Graphic';
import css from './style.module.css';
import Input from './components/Input';
import Header from './components/Header';
import calcSalary from './helpers/salary/calcSalary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentSalary: 0,
      baseINSS: 0,
      discountINSS: 0,
      percentDiscountINSS: 0,
      baseIRRF: 0,
      discountIRRF: 0,
      percentDiscountIRRF: 0,
      liquidSalary: 0,
      liquidSalaryPercent: 0,
    };
  }

  handleForm = (event) => {
    // criar um componente para form e refatorar essa função
    event.preventDefault();

    const salaryValue = event.target[0].value;
    const {
      inssFormatted,
      irrfFormatted,
      salLiquidoFormatted,
      salLiquidoPercent,
      discountPercentINSS,
      discountPercentIRRF,
    } = calcSalary(salaryValue);

    this.setState({
      currentSalary: salaryValue,
      baseINSS: inssFormatted.baseValue,
      discountINSS: inssFormatted.discount,
      percentDiscountINSS: discountPercentINSS,
      baseIRRF: irrfFormatted.baseValue,
      discountIRRF: irrfFormatted.discount,
      percentDiscountIRRF: discountPercentIRRF,
      liquidSalary: salLiquidoFormatted,
      liquidSalaryPercent: salLiquidoPercent,
    });
  };

  render() {
    const {
      baseINSS,
      baseIRRF,
      discountINSS,
      discountIRRF,
      liquidSalary,
      percentDiscountINSS,
      percentDiscountIRRF,
      liquidSalaryPercent,
    } = this.state;

    return (
      <div className={css.appContainer}>
        <Header
          title="React Salary"
          description="Calcule aqui o seu salário líquido"
        />
        <form onSubmit={this.handleForm}>
          <Input
            id={css.grossSalary}
            type="number"
            description="Seu salário (R$)"
            readOnly={false}
            step="0.01"
          />
          <Input
            id={css.baseInss}
            type="text"
            description="Base INSS"
            readOnly={true}
            value={baseINSS}
          />
          <Input
            id={css.descInss}
            type="text"
            description="Desconto INSS"
            readOnly={true}
            value={`${discountINSS} (${percentDiscountINSS}%)`}
          />
          <Input
            id={css.baseIrrf}
            type="text"
            description="Base IRRF"
            readOnly={true}
            value={baseIRRF}
          />
          <Input
            id={css.descIrrf}
            type="text"
            description="Desconto IRRF"
            readOnly={true}
            value={`${discountIRRF} (${percentDiscountIRRF}%)`}
          />
          <Input
            id={css.liquidSalary}
            type="text"
            description="Salário Líquido"
            readOnly={true}
            value={`${liquidSalary} (${liquidSalaryPercent}%)`}
          />
          <SubmitButton id={css.submitButton} value="Calcular" />
        </form>
        <Graphic
          one={liquidSalaryPercent}
          two={percentDiscountINSS}
          three={percentDiscountIRRF}
        />
        <hr />
      </div>
    );
  }
}
