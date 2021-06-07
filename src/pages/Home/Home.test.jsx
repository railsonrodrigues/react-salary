import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

import HomePage from './Home';

describe('<HomePage />', () => {
  it('should render HomePage correctly', () => {
    render(<HomePage />);
  })
})