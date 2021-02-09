import { textures } from '@Resources/index';

import { randomNumber } from '@Utils/index';

export default class Food {
  randomTexture = randomNumber(textures.fruitTextures.length);

  texture = new Image(
    textures.fruitTextures[this.randomTexture].width,
    textures.fruitTextures[this.randomTexture].height,
  );

  constructor(canvas, px, py) {
    this.positionY = py;
    this.positionX = px;
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.texture.src = textures.fruitTextures[
      this.randomTexture
    ].source;
  }

  drawFood(renderNewTexture) {
    if (renderNewTexture) {
      const newRandomTexture = randomNumber(textures.fruitTextures.length);

      this.texture.height = textures.fruitTextures[newRandomTexture].height;
      this.texture.width = textures.fruitTextures[newRandomTexture].width;
      this.texture.src = textures.fruitTextures[newRandomTexture].source;
    }

    this.canvasContext.drawImage(
      this.texture,
      this.positionX - 5,
      this.positionY - 5,
      this.texture.width,
      this.texture.height,
    );
  }
}
