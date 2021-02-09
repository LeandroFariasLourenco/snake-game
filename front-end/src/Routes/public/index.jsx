import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={Component} render={(props) => <Component {...props} />} />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
