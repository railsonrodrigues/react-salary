import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #333;

  h1 {
    font-size: 40px;
    color: #fff;
  }
`

export default function NotFound404 () {
  return (
    <ContainerWrapper>
      <h1>Error 404 - Page Not Found</h1>
    </ContainerWrapper>
  )
}
