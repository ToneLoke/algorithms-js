const deDupe = require('../../../lib/algorithms/2-linkedLists/deDupe.recursive');
const LinkedList = require('../../../lib/dataStructures/linkedList');

describe('When using the recursive deDupe() on a linked list of integers', () => {
  let containsDupes,
    noDupes;

  beforeEach(() => {
    containsDupes = new LinkedList();
    containsDupes.add(1);
    containsDupes.add(2);
    containsDupes.add(1);
    containsDupes.add(3);
    containsDupes.add(4);
    containsDupes.add(4);
    containsDupes.add(4);
    containsDupes.add(5);
    containsDupes.add(6);
    containsDupes.add(6);
    containsDupes.add(6);

    noDupes = new LinkedList();
    noDupes.add(1);
    noDupes.add(2);
    noDupes.add(3);
    noDupes.add(4);
    noDupes.add(5);
    noDupes.add(6);
  });

  it('any duplicate elements will be removed from the linked list.', () => {
    const result = deDupe(containsDupes.start);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(noDupes.start));
  });

  it('if there are no dups, nothing will happen', () => {
    const result = deDupe(noDupes.start);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(noDupes.start));
  });
});
