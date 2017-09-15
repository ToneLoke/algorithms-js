const maxHeap = require('../../lib/dataStructures/maxHeap');

describe('When adding two elements to the max heap', () => {
  let list;

  beforeEach(() => {
    list = new maxHeap();
    list.add(20);
    list.add(10);
  });

  it('the maxHeap length should by 2', () => {
    expect(list.array.length).toBe(2);
  });

  it('the 1st element of the maxHeap should be the largest value of the two.', () => {
    expect(list.array[0]).toBe(20);
  });

  it('and you remove the head, it should be the largest element.', () => {
    expect(list.removeHead()).toBe(20);
  });
});
