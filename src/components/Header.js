import React, { Component } from 'react';
import css from './components.module.css';

export default class Header extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <header>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </header>
    )
  }
}
