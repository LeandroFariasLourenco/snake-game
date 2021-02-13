import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styled';

const ScoreBoard = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.game);

  return (
    <S.ScoreboardWrapper>
      <S.UserName />

      <S.ScoreWrapper>
        Your score

        <S.Scoreboard>
          { score }
        </S.Scoreboard>
      </S.ScoreWrapper>

    </S.ScoreboardWrapper>
  );
};

export default ScoreBoard;
