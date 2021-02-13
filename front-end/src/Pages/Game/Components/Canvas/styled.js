import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

export const CanvasWrapper = styled.div`
  width: ${rem(700)};
  height: ${rem(500)};
  position: relative;
  ${({ theme }) => theme.mixins.flexCentered};
`;

export const Canvas = styled.canvas``;

const pausedAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const PausedNotification = styled.div`
  width: 100%;
  height: ${rem(40)};
  position: absolute;
  bottom: ${rem(-60)};
  text-align: center;
  left: 0;
  color: #fff;
  font-weight: 700;
  font-size: ${rem(20)};
  letter-spacing: ${rem(6)};
  animation-name: ${pausedAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &.hidden {
    display: none;
  }
`;
