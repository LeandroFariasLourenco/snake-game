window.GAME = {
  score: 0,
  paused: false,
  nickname: localStorage.getItem('nickname'),
  isPageVisible: true,
  isMuted: !!localStorage.getItem('muted'),
};
