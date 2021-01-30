import textures from '../textures';

export default class Food {
  texture = new Image(
    textures.fruitTexture.width,
    textures.fruitTexture.height,
  );

  constructor(canvas, px, py) {
    this.positionY = py;
    this.positionX = px;
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.texture.src = textures.fruitTexture.source;
  }

  drawFood() {
    this.canvasContext.drawImage(
      this.texture,
      this.positionX - 5,
      this.positionY - 5,
      this.texture.width,
      this.texture.height,
    );
  }
}
