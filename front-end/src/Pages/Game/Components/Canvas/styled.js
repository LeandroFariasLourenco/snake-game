import styled from 'styled-components';
import { rem } from 'polished';

export const CanvasWrapper = styled.div`
  width: ${rem(700)};
  height: ${rem(500)};
  position: relative;
  ${({ theme }) => theme.mixins.flexCentered};
`;

export const Canvas = styled.canvas``;
