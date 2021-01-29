export default class Food {
  constructor(canvas, px, py) {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.positionY = py;
    this.positionX = px;
  }

  drawFood() {
    this.canvasContext.fillStyle = 'lightgreen';
    this.canvasContext.strokestyle = 'darkblue';
    this.canvasContext.strokeRect(this.positionX, this.positionY, 10, 10);
    this.canvasContext.fillRect(this.positionX, this.positionY, 10, 10);
  }
}
