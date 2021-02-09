import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { childrenType } from '@PropTypes/custom';

import * as S from './styled';

const Button = ({
  text,
  children,
  ...props
}) => (
  <S.ButtonWrapper
    {...props}
  >
    { text && text }
    {children}
  </S.ButtonWrapper>
);

Button.defaultProps = {
  text: '',
  children: <></>,
};

Button.propTypes = {
  text: PropTypes.string,
  children: childrenType,
};

export default memo(Button);
