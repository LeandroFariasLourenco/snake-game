import styled from 'styled-components';

export const PopupOverlay = styled.div`
  ${({ theme }) => theme.mixins.popupOverlay(theme.zIndexes.overlay)};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  ${({ theme }) => theme.mixins.popup(theme.zIndexes.popup)};
`;
