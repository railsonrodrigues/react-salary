import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopMenu from './TopMenu';

describe('<TopMenu />', () => {
  it('should render TopMenu correctly', () => {
    const { container } = render(
      <Router>
        <TopMenu />
      </Router>
    )

    const topMenu = screen.getByRole('navigation')
    expect(topMenu).toBeInTheDocument();
  })
  it('should match snapshot', () => {
    const { container } = render(
      <Router>
        <TopMenu />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot();
  })
})