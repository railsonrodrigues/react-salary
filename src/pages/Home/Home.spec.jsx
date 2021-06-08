import React from 'react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Home';

describe('<HomePage />', () => {
  it('should render HomePage correctly', () => {
    const { container, debug } = render(
      // <Router>
      //   <Switch>
      //     <Route path="/home">
                <HomePage />
      //     </Route>
      //   </Switch>
      // </Router>
    );
    const title = screen.getByRole('heading', {name: 'Calcule Seu Salário Líquido'})
    expect(title).toBeInTheDocument();

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    const cards = container.querySelectorAll('.eHEsiy');
    expect(cards).toHaveLength(2);

    const flatCards = container.querySelectorAll('.fkoXlF');
    expect(flatCards).toHaveLength(3);

    const graphic = container.querySelector('.graphic');
    expect(graphic).toBeInTheDocument();
  })
  it('should match snapshot', () => {
    const { container } = render(
      // <Router>
      //   <Switch>
      //     <Route path="/home">
                <HomePage />
      //     </Route>
      //   </Switch>
      // </Router>
    );
    expect(container).toMatchSnapshot();
  })
  it('should change cards values on submit', async () => {
    const { container, debug } = render(<HomePage />);
    const inputGrossSalary = screen.getByPlaceholderText('Salário bruto')
    const inputnDependents = screen.getByPlaceholderText('Número de dependentes')
    const inputOtherDiscounts = screen.getByPlaceholderText('Outros Descontos')
    const buttonSubmit = screen.getByRole('button', {name: /calcular/i})

    userEvent.type(inputGrossSalary, '4500');
    userEvent.type(inputnDependents, '0');
    userEvent.type(inputOtherDiscounts, '0');
    userEvent.click(buttonSubmit);
    debug();
    const cardNetSalary = container.querySelector('.bslhuf');
    const value = 'R$ 0,00'
    console.log(value === 'R$ 0,00')
    expect(cardNetSalary.textContent).toBe('R$ 3.750,64')
  })
})