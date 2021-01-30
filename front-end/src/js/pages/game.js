import Selectors from '../cacheSelectors/game';

import SnakeClass from '../classes/Snake';
import GameClass from '../classes/Game';

const game = {
  beginGame: () => {
    const canvas = document.querySelector('#game');

    const Snake = new SnakeClass(canvas);
    const Game = new GameClass(canvas, Snake);
    Snake.snakeFrame = Game;

    document.addEventListener('keydown', (ev) => {
      Snake.changeDirection(ev);
      Game.togglePause(ev);
    });

    Game.renderGame();
  },

  handleEvents: () => {
    Selectors.score.addEventListener('scoreChange', function handleScore() {
      this.textContent = window.GAME.score;
    });

    Selectors.pause.addEventListener('togglePause', function handleTogglePause() {
      this.textContent = window.GAME.paused ? 'Resume' : 'Pausar';
    });
  },

  init: () => {
    game.handleEvents();
    game.beginGame();
  },
};

export default game.init;
