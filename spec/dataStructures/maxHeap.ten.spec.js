const maxHeap = require('../../lib/dataStructures/maxHeap');
const heapValidator = require('./binaryHeap.Validator');

describe('When adding ten elements to the max heap', () => {
  let list;

  beforeEach(() => {
    list = new maxHeap();
    list.add(20);
    list.add(10);
    list.add(100);
    list.add(30);
    list.add(-10);
    list.add(90);
    list.add(70);
    list.add(40);
    list.add(50);
    list.add(60);
  });

  afterEach(() => {
    list = null;
  });

  it('the maxHeap length should by 10', () => {
    expect(list.array.length).toBe(10);
  });

  it('the 1st element of the maxHeap should be the largest value of the ten.', () => {
    expect(list.array[0]).toBe(100);
  });

  it('and you remove the head, it should be the largest element.', () => {
    expect(list.removeHead()).toBe(100);
  });

  it('and you remove the head twice, you should get the two largest elements.', () => {
    expect(list.removeHead()).toBe(100);
    expect(list.removeHead()).toBe(90);
  });

  it('the max heap is valid', () => {
    const validator = new heapValidator(list);
    expect(validator.isValid()).toBe(true);
  });

  // todo: add check to actually walk tree and check all relationships
});
