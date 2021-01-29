import Selectors from '../cacheSelectors/game';

export default class Game {
  isGamePaused = window.GAME.paused;

  constructor(canvas, snake) {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.Snake = snake;
  }

  drawCanvas() {
    this.canvasContext.fillStyle = 'black';
    this.canvasContext.strokestyle = 'black';
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
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

    const hasHitLeftBorder = snakeHead.x < 0;
    const hasHitRightBorder = snakeHead.x > this.canvas.width - 10;
    const hasHitBottomBorder = snakeHead.y > this.canvas.height - 10;
    const hasHitTopBorder = snakeHead.y < 0;

    return hasHitBottomBorder || hasHitTopBorder || hasHitRightBorder || hasHitLeftBorder;
  }

  togglePause(ev) {
    const keyPressed = ev.keyCode;
    if (keyPressed === 32) {
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
    }, this.Snake.speed);
  }
}
