function basicCard(front, back) {

  // This code allows us to optionally create BasicCards without using the new keyword
  if (!(this instanceof basicCard)) {
    return new basicCard(front, back);
  }

  this.front = front;
  this.back = back;
}

module.exports = basicCard;






