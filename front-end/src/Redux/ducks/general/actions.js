import * as t from './types';

export const setNickname = (nickname) => ({
  type: t.SET_NICKNAME,
  payload: nickname,
});
