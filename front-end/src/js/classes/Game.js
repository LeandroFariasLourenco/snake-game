import Selectors from '../cacheSelectors/game';
import textures from '../textures';

export default class Game {
  isGamePaused = window.GAME.paused;

  constructor(canvas, snake) {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.Snake = snake;

    this.gameWidthSize = this.canvas.width - 20;
    this.gameHeightSize = this.canvas.height - 20;
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
      -(this.gameWidthSize / 2),
      -(this.gameHeightSize / 2),
      this.gameWidthSize,
      this.gameHeightSize,
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

    const hasHitLeftBorder = snakeHead.x < this.gameWidthSize;
    console.log(this.canvas.width, this.gameWidthSize, snakeHead.x);
    const hasHitRightBorder = snakeHead.x > this.gameWidthSize;
    const hasHitBottomBorder = snakeHead.y < (this.canvas.height - this.gameHeightSize);
    const hasHitTopBorder = snakeHead.y > this.gameHeightSize;

    return hasHitBottomBorder || hasHitTopBorder || hasHitRightBorder || hasHitLeftBorder;
  }

  togglePause(ev) {
    const keyPressed = ev.keyCode;
    const spacebar = 32;

    if (keyPressed === spacebar) {
      const togglePaused = new Event('togglePause');
      Selectors.pause.dispatchEvent(togglePaused);
      window.GAME.paused = !window.GAME.paused;
      this.isGamePaused = window.GAME.paused;
    }
  }

  renderGame() {
    setTimeout(() => {
      this.drawCanvas();

      if (this.hasGameEnded()) {
        alert('Você perdeu');
        return;
      }

      this.Snake.Food.drawFood();
      this.Snake.drawSnake();

      if (this.isGamePaused) {
        this.renderGame();
        return;
      }

      this.Snake.moveSnake();

      this.renderGame();
    }, 25);
  }
}
