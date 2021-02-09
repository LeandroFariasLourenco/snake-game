import PropTypes from 'prop-types';

export const childrenType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.node,
]);
