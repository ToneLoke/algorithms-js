const verifyIsBst = require('../../../lib/algorithms/4-binaryTrees/verifyIsBst');
const bst = require('../../../lib/dataStructures/binarySearchTree');

describe('Given a binary tree, determine if the tree is a binary search tree', () => {
  it('a BST will verify correctly', () => {
    let balanced;
    balanced = new bst();
    balanced.add(10);
    balanced.add(5);
    balanced.add(15);
    balanced.add(8);
    balanced.add(2);
    balanced.add(12);
    balanced.add(16);
    expect(verifyIsBst(balanced.head)).toBe(true);
  });

  it('a non-BST will not verify correctly', () => {
    const unbalanced = new bst();
    unbalanced.add(10);
    unbalanced.add(1);
    unbalanced.add(20);
    unbalanced.add(5);
    unbalanced.add(8);
    unbalanced.add(15);
    unbalanced.add(18);
    unbalanced.add(12);

    unbalanced.head.left.data = 30;
    expect(verifyIsBst(unbalanced.head)).toBe(false);
  });
});
