class GuessingGame {
  constructor() {
    this.left = null;
    this.right = null;
  }
  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  calcMid() {
    return Math.round((this.left + this.right) / 2);
  }

  guess() {
    return this.calcMid();
  }

  lower() {
    this.right = this.calcMid();
  }

  greater() {
    this.left = this.calcMid();
  }
}

module.exports = GuessingGame;
