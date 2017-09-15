const minHeap = require('../../lib/dataStructures/minHeap');
const heapValidator = require('./binaryHeap.Validator');

describe('When adding ten elements to the min heap via constructor', () => {
  let array,
    list;

  beforeEach(() => {
    array = [];
    array.push(20);
    array.push(10);
    array.push(100);
    array.push(30);
    array.push(-10);
    array.push(90);
    array.push(70);
    array.push(40);
    array.push(50);
    array.push(60);

    list = new minHeap(array);
  });

  afterEach(() => {
    list = null;
  });

  it('the minHeap length should by 10', () => {
    expect(list.array.length).toBe(10);
  });

  it('the 1st element of the minHeap should be the smallest value of the ten.', () => {
    expect(list.array[0]).toBe(-10);
  });

  it('and you remove the head, it should be the smallest element.', () => {
    expect(list.removeHead()).toBe(-10);
  });

  it('and you remove the head twice, you should get the two smallest elements.', () => {
    expect(list.removeHead()).toBe(-10);
    expect(list.removeHead()).toBe(10);
  });

  it('the min heap is valid', () => {
    const validator = new heapValidator(list);
    expect(validator.isValid()).toBe(true);
  });

  // todo: add check to actually walk tree and check all relationships
});
