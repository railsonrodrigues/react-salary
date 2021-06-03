import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px 0;
  width: 200px;
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
  color: #ce19e6;
`;

const Percentage = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #818181;
`;

export default function Card ({ title, value, percentage }) {
  return (
    <CardWrapper>
      <Title>{ title }</Title>
      <Amount>{ value }</Amount>
      <Percentage>{ percentage }</Percentage>
    </CardWrapper>
  )
}