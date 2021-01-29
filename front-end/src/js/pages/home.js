import Selectors from '../cacheSelectors/home';

const home = {
  handleNickname: () => {
    Selectors.play.addEventListener('click', (ev) => {
      ev.preventDefault();

      Selectors.nicknameOverlay.classList.add('active');
      Selectors.nicknameOverlayContent.classList.add('active');

      const closeOverlay = () => {
        Selectors.nicknameOverlay.classList.remove('active');
        Selectors.nicknameOverlayContent.classList.remove('active');
      };

      document.addEventListener('keydown', ({ keyCode }) => {
        if (keyCode === 27) {
          closeOverlay();
        }
      });

      Selectors.nicknameOverlay.addEventListener('click', closeOverlay);

      Selectors.closeNickname.addEventListener('click', closeOverlay);
    });

    Selectors.nicknameInput.addEventListener('input', ({ target: { value } }) => {
      if (value.length < 2) {
        Selectors.saveNickname.classList.remove('active');
        return;
      }

      Selectors.saveNickname.classList.add('active');
    });

    Selectors.nicknameForm.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const [nickname] = ev.target.elements;
      window.GAME.nickname = nickname.value;
      localStorage.setItem('nickname', nickname.value);
      window.location.href = '/views/game.html';
    });
  },

  getStoredNickname: () => {
    const nickname = localStorage.getItem('nickname');

    if (nickname) {
      Selectors.nickname.textContent = `Welcome ${nickname}`;
    }
  },

  init: () => {
    home.handleNickname();
    home.getStoredNickname();
  },
};

export default home.init;
