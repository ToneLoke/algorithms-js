const Stack = require('../../../lib/dataStructures/stack');

// 3.5 Implement a Queue with Two Stacks
function stackQueue() {
  this.popStack = new Stack();
  this.pushStack = new Stack();
  this.length = 0;
}

stackQueue.prototype.moveToPop = function () {
  while (!this.pushStack.isEmpty()) {
    this.popStack.push(this.pushStack.pop());
  }
};

stackQueue.prototype.moveToPush = function () {
  while (!this.popStack.isEmpty()) {
    this.pushStack.push(this.popStack.pop);
  }
};

stackQueue.prototype.push = function (data) {
  this.moveToPush();
  this.pushStack.push(data);
  this.length++;
};

stackQueue.prototype.pop = function () {
  this.moveToPop();
  this.length--;
  return this.popStack.pop();
};

stackQueue.prototype.isEmpty = function () {
  return this.popStack.isEmpty() && this.pushStack.isEmpty();
};

stackQueue.prototype.peek = function () {
  this.moveToPop();
  return this.popStack.peek();
};

module.exports = stackQueue;
