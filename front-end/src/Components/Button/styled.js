import styled, { css } from 'styled-components';
import { rem } from 'polished';

const gameButtonStyle = css`
  text-align: center;
  background-color: #000;
  font-weight: bold;
  font-size: ${rem(18)};
  padding: ${rem(10)} ${rem(15)};
  border: ${rem(1)} solid #fff;
  margin: ${rem(5)} 0;
`;

const defaultButtonStyle = css`
  border: ${rem(2)} solid #fff;
  background: #000;
  padding: ${rem(10)} 0;
  outline: none;
  text-align: center;
  text-decoration: none;
`;

export const ButtonWrapper = styled.button`
  ${({ gameButton }) => gameButton && gameButtonStyle};
  ${({ defaultButton }) => defaultButton && defaultButtonStyle};
  ${({ theme }) => theme.mixins.flexCentered}
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 300;
  letter-spacing: 2px;
  transition: all 400ms;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
