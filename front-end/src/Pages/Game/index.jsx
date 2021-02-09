import React from 'react';

import * as S from './styled';

import Canvas from './Components/Canvas';
import Information from './Components/Information';
import Scoreboard from './Components/Scoreboard';

const Game = () => (
  <S.GameWrapper>
    <Information />
    <Canvas />
    <Scoreboard />
  </S.GameWrapper>
);

export default Game;
