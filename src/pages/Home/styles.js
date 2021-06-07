import styled from "styled-components";

const ContainerWrapper = styled.div`
  max-width: 1000px;
  padding: 10px 0;
  margin: 30px auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row' };
  gap: ${props => props.column ? '15px' : '50px'};
  align-items: center;
  justify-content: center;
`;

export { ContainerWrapper, FlexWrapper };
