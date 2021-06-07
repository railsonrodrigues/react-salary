import React from "react";
import styled from 'styled-components';
import P from 'prop-types';

const ButtonStyle = styled.button`
  border: 2px solid #ce19e6;
  background: #fff;
  color: #ce19e6;
  font-weight: 700;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  transition-duration: 200ms;
  &:hover {
    cursor: pointer;
    background: #ce19e6;
    color: #fff;
  }
`;

export default function Button({ value }) {
  return <ButtonStyle>{value}</ButtonStyle>;
}

Button.propTypes = {
  value: P.string.isRequired
}
