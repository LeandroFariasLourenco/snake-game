window.GAME = {
  score: 0,
  paused: false,
  nickname: localStorage.getItem('nickname'),
  isPageVisible: true,
  isMuted: !!localStorage.getItem('muted'),
};

// assets/images that must be compiled
/* eslint-disable import/no-webpack-loader-syntax */
require('../assets/background-music.mp3');
require('../assets/eat-effect.mp3');
require('../assets/gameover-music.mp3');
require('../images/gameover.jpg!file-loader');
