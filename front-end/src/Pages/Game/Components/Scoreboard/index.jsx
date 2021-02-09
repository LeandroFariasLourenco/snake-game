import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styled';

const ScoreBoard = () => {
  const dispatch = useDispatch();

  return (
    <S.ScoreboardWrapper />
  );
};

export default ScoreBoard;
