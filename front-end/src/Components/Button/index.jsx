import React, { memo } from 'react';

import { childrenType } from '@PropTypes/custom';

import * as S from './styled';

const Button = ({
  children,
  ...props
}) => (
  <S.ButtonWrapper
    {...props}
  >
    {children}
  </S.ButtonWrapper>
);

Button.defaultProps = {
  children: <></>,
};

Button.propTypes = {
  children: childrenType,
};

export default memo(Button);
