import { generateFoodPosition } from '../utils/index';

import Selectors from '../cacheSelectors/game';

import Food from './Food';

export default class Snake {
  speed = 120;

  snakeColor = 'lightblue';

  snakeBorderColor = 'darkblue';

  snakeBody = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
  ];

  distanceX = 10;

  distanceY = 0;

  changingDirection = false;

  constructor(canvas) {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.Food = new Food(
      canvas,
      generateFoodPosition(this.canvas.width - 30),
      generateFoodPosition(this.canvas.height - 30),
    );
  }

  drawSnake() {
    this.snakeBody.forEach((position) => {
      this.canvasContext.fillStyle = this.snakeBorderColor;
      this.canvasContext.strokestyle = this.snakeColor;

      this.canvasContext.strokeRect(position.x, position.y, 10, 10);
      this.canvasContext.fillRect(position.x, position.y, 10, 10);
    });
  }

  moveSnake() {
    const newSnakeHead = {
      x: this.snakeBody[0].x + this.distanceX,
      y: this.snakeBody[0].y + this.distanceY,
    };
    this.snakeBody.unshift(newSnakeHead);
    const hasEatenFood = newSnakeHead.x === this.Food.positionX
      && newSnakeHead.y === this.Food.positionY;

    if (hasEatenFood && this.speed - 10 > 30) {
      this.speed -= 5;
    }

    if (hasEatenFood && (this.canvas.height - 10 > 300 || this.canvas.width - 20 > 400)) {
      this.canvas.height -= 10;
      this.canvas.width -= 20;
    }

    if (!hasEatenFood) {
      this.snakeBody.pop();
    } else {
      this.Food.positionX = generateFoodPosition(this.canvas.width - 30);
      this.Food.positionY = generateFoodPosition(this.canvas.height - 30);
      this.Food.drawFood();

      const scoreChange = new Event('scoreChange');
      Selectors.score.dispatchEvent(scoreChange);

      window.GAME.score += 10;
    }
  }

  changeDirection(ev) {
    if (window.GAME.paused) {
      return;
    }

    const keyPressed = ev.keyCode;
    const leftArrow = 37;
    const rightArrow = 39;
    const upArrow = 38;
    const downArrow = 40;

    const goingUp = this.distanceY === -10;
    const goingDown = this.distanceY === 10;
    const goingRight = this.distanceX === 10;
    const goingLeft = this.distanceX === -10;

    if (keyPressed === leftArrow && !goingRight) {
      this.distanceX = -10;
      this.distanceY = 0;
    }

    if (keyPressed === upArrow && !goingDown) {
      this.distanceX = 0;
      this.distanceY = -10;
    }

    if (keyPressed === rightArrow && !goingLeft) {
      this.distanceX = 10;
      this.distanceY = 0;
    }

    if (keyPressed === downArrow && !goingUp) {
      this.distanceX = 0;
      this.distanceY = 10;
    }
  }
}
