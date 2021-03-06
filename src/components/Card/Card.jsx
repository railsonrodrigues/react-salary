import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px 0;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  box-shadow: rgba(206, 25, 230, 0.2) 0px 8px 24px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #818181;
`;

const Amount = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.balance ? '#ce19e6' : '#e31021'}
`;

const Percentage = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #818181;
`;

export default function Card ({ title, value, percentage, balance }) {
  return (
    <CardWrapper>
      <Title>{ title }</Title>
      <Amount balance={balance}>{ value }</Amount>
      <Percentage>{ percentage }</Percentage>
    </CardWrapper>
  )
}

Card.defaultProps = {
  balance: false
}

Card.propTypes = {
  title: P.string.isRequired,
  value: P.string.isRequired,
  percentage: P.string.isRequired,
  balance: P.bool
}