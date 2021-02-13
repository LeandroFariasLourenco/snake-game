import { textures } from '@Resources/index';

import { setScore } from '@Ducks/game';

import { generateFoodPosition, setGameDirection } from '@Utils/index';

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

  score = 0;

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

  constructor(canvas, dispatch) {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.Food = new Food(
      canvas,
      generateFoodPosition(this.canvas.width - 20),
      generateFoodPosition(this.canvas.height - 20),
    );

    this.snakeBodyTexture.src = textures.snakeBodyTexture.source;
    this.snakeHeadTexture.src = textures.snakeHeadTexture.source;
    this.dispatchAction = dispatch;
  }

  drawSnake() {
    this.snakeBody.forEach(({ x, y }) => {
      this.canvasContext.drawImage(
        this.snakeBodyTexture,
        x,
        y,
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

    if (hasEatenFood && this.speed - 10 > 35) {
      this.speed -= 5;
    }

    if (hasEatenFood
      && (this.Game.heightSize - 10 > 300 || this.Game.widthSize - 20 > 400)) {
      this.Game.widthSize -= this.Game.frameDecrement;
      this.Game.heightSize -= this.Game.frameDecrement;
      this.Game.sizeMultiplier += 1;
    }

    if (!hasEatenFood) {
      this.snakeBody.pop();
    } else {
      const minPosition = this.Game.sizeMultiplier * 10 + 20;

      this.Food.positionX = generateFoodPosition(this.Game.widthSize - 20, minPosition);
      this.Food.positionY = generateFoodPosition(this.Game.heightSize - 20, minPosition);
      this.Food.drawFood(true);

      if (this.Game.sizeMultiplier > 8) {
        this.dispatchAction(setScore(this.score += (8 * 5)));
      }
      this.dispatchAction(setScore(this.score += (this.Game.sizeMultiplier * 5)));
    }
  }

  changeDirection(ev, isPaused) {
    if (isPaused) {
      return;
    }

    const keyPressed = ev.keyCode;
    const left = { arrow: 37, a: 65 };
    const right = { arrow: 39, d: 68 };
    const up = { arrow: 38, w: 87 };
    const down = { arrow: 40, s: 83 };

    const goingUp = this.distanceY === -10;
    const goingDown = this.distanceY === 10;

    const goingRight = this.distanceX === 10;
    const goingLeft = this.distanceX === -10;

    if (keyPressed === left.arrow && !goingRight) {
      setGameDirection.apply(this, [-10, 0, 'left']);
    } else if (keyPressed === left.a && !goingRight) {
      setGameDirection.apply(this, [-10, 0, 'left', 'a']);
    }

    if (keyPressed === up.arrow && !goingDown) {
      setGameDirection.apply(this, [0, -10, 'up']);
    } else if (keyPressed === up.w && !goingDown) {
      setGameDirection.apply(this, [0, -10, 'up', 'w']);
    }

    if (keyPressed === right.arrow && !goingLeft) {
      setGameDirection.apply(this, [10, 0, 'right']);
    } else if (keyPressed === right.d && !goingLeft) {
      setGameDirection.apply(this, [10, 0, 'right', 'd']);
    }

    if (keyPressed === down.arrow && !goingUp) {
      setGameDirection.apply(this, [0, 10, 'down']);
    } else if (keyPressed === down.s && !goingUp) {
      setGameDirection.apply(this, [0, 10, 'down', 's']);
    }
  }

  set snakeFrame(Game) {
    this.Game = Game;
  }
}
