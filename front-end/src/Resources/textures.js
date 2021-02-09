import snakeHeadTexture from '@Assets/Images/textures/snake-head.png';
import snakeBodyTexture from '@Assets/Images/textures/snake-body.jpg';

import gameBackgroundTexture from '@Assets/Images/textures/game-background.gif';
import gameFrameTexture from '@Assets/Images/textures/game-frame.jpg';

import watermelonTexture from '@Assets/Images/textures/watermelon.png';
import melonTexture from '@Assets/Images/textures/melon.png';
import strawberryTexture from '@Assets/Images/textures/strawberry.png';
import appleTexture from '@Assets/Images/textures/apple.png';
import cherryTexture from '@Assets/Images/textures/cherry.png';
import bananaTexture from '@Assets/Images/textures/banana.png';

export default {
  snakeHeadTexture: {
    width: 10,
    height: 10,
    source: snakeHeadTexture,
  },
  backgroundTexture: {
    width: 20,
    height: 20,
    source: gameBackgroundTexture,
  },
  gameFrameTexture: {
    width: 20,
    height: 20,
    source: gameFrameTexture,
  },
  fruitTextures:
  [
    {
      name: 'apple',
      width: 20,
      height: 20,
      source: appleTexture,
    },
    {
      name: 'cherry',
      width: 20,
      height: 20,
      source: cherryTexture,
    },
    {
      name: 'banana',
      width: 20,
      height: 20,
      source: bananaTexture,
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
    source: snakeBodyTexture,
  },
};
