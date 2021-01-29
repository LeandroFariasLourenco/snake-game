import Selectors from '../cacheSelectors/home';

const home = {
  handleNickname: () => {
    Selectors.play.addEventListener('click', (ev) => {
      ev.preventDefault();
    });
  },

  init: () => {
    home.handleNickname();
  },
};

export default home.init;
