import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SnakeModel, GameModel } from '@Models/index';

import * as S from './styled';

const Canvas = () => {
  const canvasRef = useRef();
  const dispatch = useDispatch();
  const gameStore = useSelector((state) => state.game);

  const beginGame = useCallback(() => {
    const canvas = canvasRef.current;

    const Snake = new SnakeModel(canvas, dispatch);
    const Game = new GameModel(
      canvas,
      Snake,
      dispatch,
    );

    Snake.snakeFrame = Game;
    Game.renderGame();

    document.addEventListener('keydown', (ev) => {
      Snake.changeDirection(ev, gameStore.paused);
      Game.togglePause(ev);
    });

    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dispatch]);

  useEffect(() => {
    beginGame();
  }, [beginGame]);

  return (
    <S.CanvasWrapper>
      <S.Canvas
        ref={canvasRef}
        height={500}
        width={700}
      />
    </S.CanvasWrapper>
  );
};

export default Canvas;
