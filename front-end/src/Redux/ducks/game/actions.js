import * as t from './types';

export const setScore = (score) => ({
  type: t.SET_SCORE,
  payload: score,
});

export const setGameover = (isGameover) => ({
  type: t.SET_GAMEOVER,
  payload: isGameover,
});
