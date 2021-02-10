import styled from 'styled-components';
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

export const KeyContent = styled.div`
  border: ${rem(1)} solid #fff;
  padding: ${rem(10)} ${rem(15)};
  max-width: 8%;
  height: ${rem(16)};
  ${({ theme }) => theme.mixins.flexCentered};
  transition: background-color 400ms;

  &.is--active {
    background-color: gray;
  }

  &:first-child {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:not(&:first-child) {
    margin-top: ${rem(38)};
  }
`;

export const KeyTypeWrapper = styled.div`
  display: inherit;
  flex: 1;
  flex-flow: wrap;
  ${({ theme }) => theme.mixins.flexCentered};
  position: relative;
`;
