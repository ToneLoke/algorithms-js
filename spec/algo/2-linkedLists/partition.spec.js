const partition = require('../../../lib/algorithms/2-linkedLists/partition');
const LinkedList = require('../../../lib/dataStructures/linkedList');

describe('When using partition(10) on a linked list of integers', () => {
  let list,
    noDupes,
    number = 10;

  beforeEach(() => {
    list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(10);
    list.add(3);
    list.add(40);
    list.add(4);
    list.add(14);
    list.add(5);
    list.add(16);
    list.add(6);
    list.add(69);
  });

  it(`all the numbers under ${number} will be before numbers greater than ${number}`, () => {
    let result = partition(list.start, number);
    let lessThanX = 0;

    while (result != null) {
      if (lessThanX < 6) {
        expect(result.data).toBeLessThan(number);
      } else if (lessThanX === 6) {
        expect(result.data).toEqual(number);
      } else {
        expect(result.data).toBeGreaterThan(number);
      }

      lessThanX++;
      result = result.next;
    }
  });
});
