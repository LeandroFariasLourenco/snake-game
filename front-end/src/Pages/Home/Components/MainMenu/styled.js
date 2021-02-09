import styled from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const MainMenuWrapper = styled.div`
  flex-flow: column;
  ${({ theme }) => theme.mixins.flexCentered};
`;

export const MainMenuTitle = styled.h1`
  font-size: ${rem(48)};
  margin-bottom: ${rem(30)};
`;

export const OptionButton = styled(Button)`
  width: 100%;
`;

export const OptionWrapper = styled.div`
  width: 65%;
  max-width: ${rem(500)};
  flex-flow: column;
  ${({ theme }) => theme.mixins.flexCentered};
`;
