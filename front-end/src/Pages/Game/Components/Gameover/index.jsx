import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import C from '@Constants/index';

import Popup from '@Components/Popup';

import { setGameover } from '@Ducks/game';

import * as S from './styled';

const Gameover = () => {
  const { gameover } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUploadScore = () => {
    dispatch(setGameover(false));
    history.push(C.paths.leaderboards);
  };

  const handleMainMenu = () => {
    dispatch(setGameover(false));
    history.push(C.paths.home);
  };

  return (
    <S.GameoverFakeWrapper
      className={cx({ active: gameover })}
    >
      <Popup>
        <S.GameoverContent>
          <S.GameoverAnimation />
          <S.GameoverOptions>
            Oh no...
            <br />
            Seems like you&apos;ve met your end but don&apos;t
            worry you can let other people know you put up a great
            fight by uploading your score.
            <br />

            <S.GameButton
              title='Upload score'
              gameButton
              onClick={() => handleUploadScore()}
            >
              Upload score
            </S.GameButton>
            <S.GameButton
              title='Home'
              gameButton
              onClick={() => handleMainMenu()}
            >
              Main menu
            </S.GameButton>
          </S.GameoverOptions>
        </S.GameoverContent>
      </Popup>
    </S.GameoverFakeWrapper>
  );
};

export default Gameover;
