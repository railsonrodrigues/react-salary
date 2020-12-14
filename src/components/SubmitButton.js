import React, { Component } from 'react';
import css from './components.module.css';

export default class SubmitButton extends Component {
  render() {
    const { id, value } = this.props;
    return <input id={ id } className={ `${ css.btn } btn waves-effect green` } type="submit" value={ value } />
  }
}
