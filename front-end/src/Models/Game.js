import { textures } from '@Resources/index';

export default class Game {
  isGamePaused = false;

  frameDecrement = 20;

  sizeMultiplier = 0;

  constructor(canvas, snake) {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.Snake = snake;

    this.widthSize = this.canvas.width - this.frameDecrement;
    this.heightSize = this.canvas.height - this.frameDecrement;
  }

  drawCanvas() {
    const canvasTexture = new Image(
      textures.backgroundTexture.width,
      textures.backgroundTexture.height,
    );
    canvasTexture.src = textures.backgroundTexture.source;
    this.canvasContext.drawImage(
      canvasTexture,
      0,
      0,
      this.canvas.width,
      this.canvas.height,
    );

    this.canvasContext.save();
    const gameFrameTexture = new Image(
      textures.gameFrameTexture.width,
      textures.gameFrameTexture.height,
    );
    gameFrameTexture.src = textures.gameFrameTexture.source;
    this.canvasContext.translate(
      this.canvas.width / 2,
      this.canvas.height / 2,
    );
    this.canvasContext.drawImage(
      gameFrameTexture,
      -(this.widthSize / 2),
      -(this.heightSize / 2),
      this.widthSize,
      this.heightSize,
    );
    this.canvasContext.restore();
  }

  hasGameEnded() {
    const snakeHead = this.Snake.snakeBody[0];
    for (let i = 1, len = this.Snake.snakeBody.length; i < len; i += 1) {
      const hasCollidedWithItself = this.Snake.snakeBody[i].x === snakeHead.x
        && this.Snake.snakeBody[i].y === snakeHead.y;

      if (hasCollidedWithItself) {
        return true;
      }
    }

    const frameBoundary = this.frameDecrement / 2;
    const frameMinPosition = this.sizeMultiplier * frameBoundary;

    const hasHitLeftBorder = snakeHead.x <= this.sizeMultiplier * frameBoundary;
    const hasHitTopBorder = snakeHead.y <= this.sizeMultiplier * frameBoundary;

    const hasHitRightBorder = snakeHead.x > this.widthSize + frameMinPosition;
    const hasHitBottomBorder = snakeHead.y > this.heightSize + frameMinPosition;

    return hasHitBottomBorder || hasHitTopBorder || hasHitRightBorder || hasHitLeftBorder;
  }

  togglePause(ev) {
    const keyPressed = ev.keyCode;
    const spacebar = 32;

    if (keyPressed === spacebar) {
      // const togglePaused = new Event('togglePause');
      // Selectors.pause.dispatchEvent(togglePaused);
      window.GAME.paused = !window.GAME.paused;
      this.isGamePaused = window.GAME.paused;
    }
  }

  renderGame() {
    setTimeout(() => {
      this.drawCanvas();

      if (this.hasGameEnded()) {
        // Selectors.gameoverPopup.dispatchEvent(new CustomEvent('gameover'));
        return;
      }

      this.Snake.Food.drawFood(false);
      this.Snake.drawSnake();

      if (this.isGamePaused) {
        this.renderGame();
        return;
      }

      this.Snake.moveSnake();
      this.renderGame();
    }, this.Snake.speed);
  }
}
