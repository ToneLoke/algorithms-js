function validate(heap) {
  if (heap === undefined) throw new Error('Cannot validate heap.');
  this.heap = heap;
}

validate.prototype.isValid = function (parent, length) {
  if (arguments.length === 0) {
    parent = 0;
    length = this.heap.array.length;
  }

  if (parent < length) {
    const left = this.heap.getLeftChild(parent);
    const right = this.heap.getRightChild(parent);
    let isValid = true;

    if (left < length) {
      if (this.heap.shouldSwap(this.heap.array[left], this.heap.array[parent])) {
        return false;
      } else {
        return isValid = isValid && this.isValid(left, length);
      }
    }

    if (right < length) {
      if (this.heap.shouldSwap(this.heap.array[right], this.heap.array[parent])) {
        return false;
      } else { return isValid = isValid && this.isValid(right, length); }
    }

    return isValid;
  }
};

module.exports = validate;
