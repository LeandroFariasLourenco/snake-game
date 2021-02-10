import styled from 'styled-components';

export const GameoverWrapper = styled.div`
  ${({ theme }) => theme.mixins.popupOverlay(theme.zIndexes.overlay)};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const GameoverContent = styled.div`
  ${({ theme }) => theme.mixins.popup(theme.zIndexes.popup)};
`;

export const GameoverFakeWrapper = styled.div`
  ${({ theme }) => theme.mixins.visibilityTransition};
`;
