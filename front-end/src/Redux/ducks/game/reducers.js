import * as t from './types';

const INITIAL_STATE = {
  score: 0,
  gameover: false,
  paused: false,
  speed: 120,
  currentPressedKey: '',
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
  case t.SET_PAUSED:
    return {
      ...state,
      paused: payload,
    };
  case t.SET_PRESSED_KEY:
    return {
      ...state,
      currentPressedKey: payload,
    };
  default:
    return state;
  }
}
