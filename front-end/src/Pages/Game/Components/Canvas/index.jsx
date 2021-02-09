import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { SnakeModel, GameModel } from '@Models/index';

import * as S from './styled';

const Canvas = () => {
  const canvasRef = useRef();

  const handleKeyPress = useCallback((ev, Snake, Game) => {
    Snake.changeDirection(ev);
    Game.togglePause(ev);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    const Snake = new SnakeModel(canvas);

    const Game = new GameModel(canvas, Snake);

    Snake.snakeFrame = Game;
    Game.renderGame();

    document.addEventListener('keydown', (ev) => handleKeyPress(ev, Snake, Game));

    return document.removeEventListener('keydown', handleKeyPress);
  }, [canvasRef, handleKeyPress]);

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
