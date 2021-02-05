import Selectors from '../cacheSelectors/game';

import { pageVisibilityAPI } from '../utils';

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

    Selectors.nickname.textContent = window.GAME.nickname;
    Game.renderGame();
  },

  handleEvents: () => {
    Selectors.score.addEventListener('scoreChange', function handleScore() {
      this.textContent = window.GAME.score;
    });

    Selectors.pause.addEventListener('togglePause', function handleTogglePause() {
      this.classList.toggle('active');
      Selectors.pauseButton.classList.toggle('current');
    });

    document.addEventListener('toggleKeyPressed', ({ detail: key }) => {
      const allKeys = document.querySelectorAll('.game__button');
      [...allKeys].forEach((button) => {
        button.classList.remove('current');
      });

      const keyToToggleActive = document.querySelector(`.js--key-${key}`);
      keyToToggleActive.classList.toggle('current');
    });
  },

  init: () => {
    game.handleEvents();
    game.beginGame();

    pageVisibilityAPI();
  },
};

export default game.init;
