import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import C from '@Constants/index';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { nickname } = useSelector((state) => state.general);

  return (
    <Route
      {...rest}
      render={(props) => (
        nickname
          ? <Component {...props} />
          : <Redirect to={C.paths.home} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
