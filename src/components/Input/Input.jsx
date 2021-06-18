import React from "react";
import P from 'prop-types';
import styled from 'styled-components';

const InputStyle = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #aaa;
  padding: 0 10px;
  transition-duration: 200ms;
  &::placeholder {
    color: #818181;
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #ce19e6;
  }
`;

export default function Input({ placeholder, inputRef, id }) {
  return <InputStyle ref={inputRef} id={id} type="text" placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: P.string.isRequired,
  id: P.string.isRequired
}
