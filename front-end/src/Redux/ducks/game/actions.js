import * as t from './types';

export const setScore = (score) => ({
  type: t.SET_SCORE,
  payload: score,
});

export const setGameover = (isGameover) => ({
  type: t.SET_GAMEOVER,
  payload: isGameover,
});

export const setPaused = (isPaused) => ({
  type: t.SET_PAUSED,
  payload: isPaused,
});

export const setCurrentPressedKey = (pressedKey) => ({
  type: t.SET_PRESSED_KEY,
  payload: pressedKey,
});
