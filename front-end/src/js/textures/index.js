import melonTexture from '../../images/melon.png';
import strawberryTexture from '../../images/strawberry.png';
import watermelonTexture from '../../images/watermelon.png';

export default {
  snakeHeadTexture: {
    width: 10,
    height: 10,
    source: 'http://pixelartmaker.com/art/2ff5966906c4cb6.png',
  },
  backgroundTexture: {
    width: 20,
    height: 20,
    source: 'https://i.imgur.com/hR9768t.gif',
  },
  gameFrameTexture: {
    width: 20,
    height: 20,
    source: 'https://pbs.twimg.com/media/DO6DEgOW0AA8KUA.jpg',
  },
  fruitTextures:
  [
    {
      name: 'apple',
      width: 20,
      height: 20,
      source: 'https://art.ngfiles.com/images/404000/404664_thexxxreaper_pixel-apple.png?f1454891997',
    },
    {
      name: 'cherry',
      width: 20,
      height: 20,
      source: 'https://www.clipartmax.com/png/full/93-930313_drawn-cherry-pacman-minecraft-pixel-art-disco.png',
    },
    {
      name: 'banana',
      width: 20,
      height: 20,
      source: 'https://cryptostorm.is/blog/bl-content/uploads/pages/autosave-e7855c00c480c25bc3b65e1d99a9081e/banana.png',
    },
    {
      name: 'melon',
      width: 20,
      height: 20,
      source: melonTexture,
    },
    {
      name: 'watermelon',
      width: 20,
      height: 20,
      source: watermelonTexture,
    },
    {
      name: 'strawberry',
      width: 30,
      height: 20,
      source: strawberryTexture,
    },
  ],
  snakeBodyTexture: {
    width: 20,
    height: 20,
    source: 'https://thumbs.dreamstime.com/b/snake-vector-green-skin-pattern-texture-snake-skin-background-design-light-green-yellow-colorful-bright-acid-gradient-vector-166004769.jpg',
  },
};
