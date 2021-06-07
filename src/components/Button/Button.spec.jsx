import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from 'react'

import Button from "./Button"

describe('<Button />', () => {
  it('should render Button with text', () => {
    render(<Button value="Calcular" />);

    expect.assertions(1);

    const button = screen.getByRole('button', {name: /calcular/i})
    expect(button).toBeInTheDocument();
  })

  it('should match snapshot', () => {
    const {container} = render(<Button value="Calcular" />);
    expect.assertions(1);
    expect(container.firstChild).toMatchSnapshot();
  })
})
