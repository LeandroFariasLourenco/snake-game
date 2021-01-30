import { generateFoodPosition } from '../utils/index';

import Selectors from '../cacheSelectors/game';

import textures from '../textures';

import Food from './Food';

export default class Snake {
  snakeHeadTexture = new Image(
    textures.snakeHeadTexture.width,
    textures.snakeHeadTexture.height,
  );

  snakeBodyTexture = new Image(
    textures.snakeBodyTexture.width,
    textures.snakeBodyTexture.height,
  );

  speed = 120;

  snakeColor = 'lightblue';

  direction = 'right';

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

    this.snakeBodyTexture.src = textures.snakeBodyTexture.source;
    this.snakeHeadTexture.src = textures.snakeHeadTexture.source;
  }

  drawSnake() {
    this.snakeBody.forEach((position) => {
      this.canvasContext.drawImage(
        this.snakeBodyTexture,
        position.x,
        position.y,
        10,
        10,
      );
    });

    this.canvasContext.save();

    let angle;
    if (this.direction) {
      switch (this.direction) {
      case 'left':
        angle = 270;
        break;
      case 'right':
        angle = 90;
        break;
      case 'top':
        angle = 0;
        break;
      case 'down':
        angle = 180;
        break;
      default:
        angle = 0;
        break;
      }
    }

    const radianDegree = Math.PI / 180;
    this.canvasContext.translate(this.snakeBody[0].x, this.snakeBody[0].y);
    this.canvasContext.translate(
      this.snakeHeadTexture.width / 2,
      this.snakeHeadTexture.height / 2,
    );

    this.canvasContext.rotate(angle * radianDegree);

    this.canvasContext.drawImage(
      this.snakeHeadTexture,
      -(this.snakeHeadTexture.width / 2),
      -(this.snakeHeadTexture.height / 2),
      this.snakeHeadTexture.width,
      this.snakeHeadTexture.height,
    );

    this.canvasContext.rotate(0.5);
    this.canvasContext.restore();
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

    if (hasEatenFood
      && (this.Game.gameHeightSize - 10 > 300 || this.Game.gameWidthSize - 20 > 400)) {
      this.Game.gameWidthSize -= 20;
      this.Game.gameHeightSize -= 10;
    }

    if (!hasEatenFood) {
      this.snakeBody.pop();
    } else {
      this.Food.positionX = generateFoodPosition(this.Game.gameWidthSize - 30);
      this.Food.positionY = generateFoodPosition(this.Game.gameHeightSize - 30);
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
      this.direction = 'left';
    }

    if (keyPressed === upArrow && !goingDown) {
      this.distanceX = 0;
      this.distanceY = -10;
      this.direction = 'up';
    }

    if (keyPressed === rightArrow && !goingLeft) {
      this.distanceX = 10;
      this.distanceY = 0;
      this.direction = 'right';
    }

    if (keyPressed === downArrow && !goingUp) {
      this.distanceX = 0;
      this.distanceY = 10;
      this.direction = 'down';
    }
  }

  set snakeFrame(Game) {
    this.Game = Game;
  }
}
