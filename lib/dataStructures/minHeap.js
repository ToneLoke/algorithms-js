const binaryHeap = require('./binaryHeap');

function minHeap() {
  binaryHeap.apply(this, arguments);
}

minHeap.prototype = new binaryHeap();

minHeap.prototype.shouldSwap = function (childData, parentData) {
  return childData < parentData;
};

module.exports = minHeap;
