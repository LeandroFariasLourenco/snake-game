import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  flex-flow: column;
  ${({ theme }) => theme.mixins.flexCentered};
`;
