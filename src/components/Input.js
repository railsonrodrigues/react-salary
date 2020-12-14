import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { id, description, className, type, step, value, readOnly } = this.props;

    return (
      <label id={ id }>
        { description }:
        <input 
          id={ id }
          className={ className } 
          type={ type }
          step={ step }
          value={ value }
          readOnly={ readOnly }
        />
      </label>
    )
  }
}
