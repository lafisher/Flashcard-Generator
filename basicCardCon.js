function basicCard(front, back) {

  if (!(this instanceof basicCard)) {
    return new basicCard(front, back);
  }

  this.front = front;
  this.back = back;
}
// export to main game play js file
module.exports = basicCard;