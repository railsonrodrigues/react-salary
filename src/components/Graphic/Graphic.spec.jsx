import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

import Graphic from './Graphic';

describe('<Graphic />', () => {
  it('should render Graphic', () => {
    const {container} = render(<Graphic />)
    const graphic = container.querySelector('.graphic');
    expect(graphic).toBeInTheDocument();
  })
})