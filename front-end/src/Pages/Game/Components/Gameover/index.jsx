import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import C from '@Constants/index';

import { setGameover } from '@Ducks/game';

import * as S from './styled';

const Gameover = () => {
  const { gameover } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUploadScore = () => {
    dispatch(setGameover(false));
    history.navigate(C.paths.leaderboards);
  };

  const handleMainMenu = () => {
    dispatch(setGameover(false));
    history.navigate(C.paths.home);
  };

  return (
    <S.GameoverFakeWrapper
      className={cx({ active: gameover })}
    >
      <S.GameoverWrapper />
      <S.GameoverContent>
        Mano o a zideia kkkkkkkk
      </S.GameoverContent>
    </S.GameoverFakeWrapper>
  );
};

export default Gameover;
