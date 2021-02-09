function setGameDirection(x, y, direction, keyPressed = direction) {
  const customEvent = new CustomEvent('toggleKeyPressed', { detail: keyPressed });

  this.distanceX = x;
  this.distanceY = y;
  this.direction = direction;
  document.dispatchEvent(customEvent);
}

export default setGameDirection;
