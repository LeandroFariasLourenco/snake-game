import * as t from './types';

const INITIAL_STATE = {
  score: 0,
  gameover: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SET_GAMEOVER:
    return {
      ...state,
      gameover: payload,
    };
  case t.SET_SCORE:
    return {
      ...state,
      score: payload,
    };
  default:
    return state;
  }
}
