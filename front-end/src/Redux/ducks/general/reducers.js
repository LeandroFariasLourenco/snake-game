import * as t from './types';

const INITIAL_STATE = {
  nickname: localStorage.getItem('nickname') || '',
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SET_NICKNAME:
    return {
      ...state,
      nickname: payload,
    };
  default:
    return state;
  }
}
