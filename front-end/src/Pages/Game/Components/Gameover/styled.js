import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const GameoverContent = styled.div`
  ${({ theme }) => theme.mixins.flexCentered};
  flex-flow: column;
  max-width: ${rem(350)};
`;

export const GameoverFakeWrapper = styled.div`
  ${({ theme }) => theme.mixins.visibilityTransition};
`;

export const GameButton = styled(Button)`
  font-size: ${rem(14)};
  margin: ${rem(10)} auto;
`;

const gameoverAnimation = keyframes`
  0% {
    transform: translateY(-500%);

    &::after {
      width: 0;
    }
  }

  50% {
    transform: translateY(0);
  }

  70% {
    transform: translateX(-2.5%);
  }

  90% {
    transform: translateX(2.5%);
  }

  100% {
    transform: unset;
  }
`;

const gameoverBorderAnimation = keyframes`
  from {
    width: 0;
  }

  to {
    width: ${rem(350)};
  }
`;

export const GameoverAnimation = styled.div`
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-name: ${gameoverAnimation};
  font-weight: bold;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: ${rem(2)};
    background-color: #fff;
    ${({ theme }) => theme.mixins.absoluteCentered};
    bottom: ${rem(-10)};
    top: unset;
    animation-name: ${gameoverBorderAnimation};
    animation-iteration-count: 1;
    animation-duration: 2.5s;
    animation-delay: 4s;
    animation-fill-mode: both;
  }

  &::before {
    content: "Gameover";
    font-family: "Pixelfont", sans-serif;
    color: rgba(255, 255, 255, 0.9);
    font-size: ${rem(32)};
    text-shadow: 0 0 20px black;
  }
`;

const showGameoverText = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }

  to {
    max-height: ${rem(300)};
    border-color: #fff;
  }
`;

export const GameoverOptions = styled.div`
  animation-name: ${showGameoverText};
  animation-iteration-count: 1;
  animation-delay: 6.5s;
  animation-duration: 3s;
  animation-fill-mode: both;
  margin-top: ${rem(8)};
  padding: ${rem(10)} ${rem(10)};
  background-color: #000;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  border: ${rem(1)} solid transparent;
  border-top: none;
  text-align: center;
  line-height: ${rem(20)};
`;
