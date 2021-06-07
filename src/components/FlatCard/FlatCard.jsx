import React from 'react';
import styled from 'styled-components';

const FlatCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const SecondaryText = styled.span`
  color: ${props => props.discountAmount ? '#e31021' : '#818181' };
  font-weight: ${props => props.discountAmount ? '700' : '400' };
  font-size: ${props => props.discountAmount ? '22px' : '16px' }
`;

const Title = styled.h3`
  color: #313131;
`;

export default function FlatCard ({ title, value, percentage }) {
  return (
    <FlatCardWrapper>
      <Title>{ title }</Title>
      <SecondaryText discountAmount>{ value }</SecondaryText>
      <SecondaryText>{ percentage }</SecondaryText>
    </FlatCardWrapper>
  )
}