import React from 'react';
import PropTypes from 'prop-types';

import { childrenType } from '@PropTypes/custom';

import * as S from './styled';

const Popup = ({
  children,
  handleClose,
}) => (
  <>
    <S.PopupContent>
      {children}
    </S.PopupContent>
    <S.PopupOverlay onClick={handleClose} />
  </>
);

Popup.defaultProps = {
  handleClose: () => {},
};

Popup.propTypes = {
  handleClose: PropTypes.func,
  children: childrenType.isRequired,
};

export default Popup;
