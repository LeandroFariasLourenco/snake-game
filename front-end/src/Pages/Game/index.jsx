import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

import Canvas from './Components/Canvas';
import Information from './Components/Information';
import Scoreboard from './Components/Scoreboard';
import Gameover from './Components/Gameover';

const Game = () => {
  const { gameover } = useSelector((state) => state.game);

  return (
    <S.GameWrapper>
      <Information />
      <Canvas />
      <Scoreboard />
      {gameover && <Gameover />}
    </S.GameWrapper>
  );
};

export default Game;
