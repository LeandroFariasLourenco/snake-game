import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const InformationWrapper = styled.div`
  ${({ theme }) => theme.mixins.container};
`;

export const InformationText = styled.p`
  text-align: center;
  margin-bottom: ${rem(20)};
  padding: 0 ${rem(25)};
`;

export const KeyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${rem(10)} 0;
`;

const activeKey = css`
  transition: background-color 400ms;

  &.is--active {
    background-color: gray;
  }
`;

export const KeyContent = styled.div`
  border: ${rem(1)} solid #fff;
  padding: ${rem(10)} ${rem(15)};
  max-width: 8%;
  height: ${rem(32)};
  ${({ theme }) => theme.mixins.flexCentered};
  ${activeKey};

  &:first-child {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: none;
  }

  &:not(&:first-child) {
    margin-top: ${rem(32)};
  }
`;

export const SpaceKey = styled.div`
  border: ${rem(1)} solid #fff;
  background-color: #000;
  height: ${rem(40)};
  width: 80%;
  position: relative;
  margin: 0 auto;
  ${activeKey};

  &::after {
    content: '';
    position: absolute;
    ${({ theme }) => theme.mixins.absoluteCentered};
    width: 50%;
    height: ${rem(1.5)};
    background-color: #fff;
  }
`;

export const KeyTypeWrapper = styled.div`
  display: inherit;
  flex: 1;
  flex-flow: wrap;
  ${({ theme }) => theme.mixins.flexCentered};
  position: relative;
`;
