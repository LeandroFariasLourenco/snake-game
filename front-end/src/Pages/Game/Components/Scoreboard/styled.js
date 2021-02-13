import styled from 'styled-components';
import { rem } from 'polished';

export const ScoreboardWrapper = styled.div`
  ${({ theme }) => theme.mixins.container};
  ${({ theme }) => theme.mixins.flexCentered};
  flex-flow: column;
`;

export const ScoreWrapper = styled.div`
  display: inherit;
  flex-flow: column;
  ${({ theme }) => theme.mixins.flexCentered};
`;

export const Scoreboard = styled.span`
  margin-top: ${rem(10)};
  min-width: ${rem(50)};
  border: ${rem(1)} inset #fff;
  text-align: center;
  padding: ${rem(5)};
`;

export const UserName = styled.div``;
