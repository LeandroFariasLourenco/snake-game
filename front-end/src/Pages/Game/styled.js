import styled from 'styled-components';

export const GameWrapper = styled.div`
  display: flex;
  height: 100%;
  ${({ theme }) => theme.mixins.flexCentered};
`;
