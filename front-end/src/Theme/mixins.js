import { css } from 'styled-components';
import { rem } from 'polished';

export const flexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const absoluteCentered = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const visibilityTransition = css`
  opacity: 1;
  visibility: unset;
  transition: all 400ms;

  &:not(.active) {
    visibility: hidden;
    opacity: 0;
  }
`;

export const popup = (zindex) => css`
  z-index: ${zindex};
  ${absoluteCentered};
`;

export const popupOverlay = (zindex) => css`
  position: absolute;
  z-index: ${zindex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const container = css`
  max-width: ${rem(470)};
  flex: 1;
`;
