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

  handleKeyPressActive: () => {
    document.addEventListener('toggleKeyPressed', ({ detail: key }) => {
      const allKeys = document.querySelectorAll('.game__button');
      [...allKeys].forEach((button) => {
        button.classList.remove('current');
      });

      const keyToToggleActive = document.querySelector(`.js--key-${key}`);
      keyToToggleActive.classList.toggle('current');
    });
  },

  handleScoreChange: () => {
    Selectors.score.addEventListener('scoreChange', function handleScore() {
      this.textContent = window.GAME.score;
    });
  },

  handlePauseGame: () => {
    Selectors.pause.addEventListener('togglePause', function handleTogglePause() {
      this.classList.toggle('active');
      Selectors.pauseButton.classList.toggle('current');
    });
  },

  handleMutedSound: () => {
    document.addEventListener('toggleSound', ({ detail: isMuted }) => {
      localStorage.setItem('muted', isMuted);
      window.GAME.isMuted = isMuted;
    });

    Selectors.muted.addEventListener('click', function handleUnMutedSound() {
      this.classList.toggle('is--muted');
      document.dispatchEvent(new CustomEvent('toggleSound', { detail: false }));
    });

    Selectors.notMuted.addEventListener('click', function handleMuteSound() {
      this.previousElementSibling.classList.toggle('is--muted');
      document.dispatchEvent(new CustomEvent('toggleSound', { detail: true }));
    });
  },

  handleGameOverPopup: () => {
    Selectors.gameoverPopup.addEventListener('gameover', function handlePopup() {
      this.classList.toggle('active');
    });
  },

  init: () => {
    game.handleMutedSound();
    game.handleScoreChange();
    game.handlePauseGame();
    game.handleKeyPressActive();
    game.handleGameOverPopup();
    game.beginGame();
    pageVisibilityAPI();
  },
};

export default game.init;
