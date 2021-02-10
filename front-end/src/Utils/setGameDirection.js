import { setCurrentPressedKey } from '@Ducks/game';

function setGameDirection(x, y, direction, keyPressed = direction) {
  this.distanceX = x;
  this.distanceY = y;
  this.direction = direction;
  this.dispatchAction(setCurrentPressedKey(keyPressed));
}

export default setGameDirection;
