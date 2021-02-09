export const flexCentered = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const absoluteCentered = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const visibilityTransition = `
  visibility: hidden;
  opacity: 0;
  transition: all 400ms;

  &:not(.active) {
    opacity: 1;
    visibility: unset;
  }
`;
