import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 48px;
  text-align: ${props => props.align};
`;

const Heading = ({title, align}) => {
  return <Title align={align}>{title}</Title>
}

export default Heading;
