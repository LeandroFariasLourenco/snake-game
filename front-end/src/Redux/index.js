import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ducks from './ducks';

const store = process.env.NODE_ENV === 'development'
  ? createStore(ducks, applyMiddleware(logger))
  : createStore(ducks);

export default store;
