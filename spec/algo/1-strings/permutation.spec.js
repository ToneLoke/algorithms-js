const isPermutation = require('../../../lib/algorithms/1-strings/permutation');

const testValue1 = 'test_string_is_so_great';
const testValue2 = '_t_greing_tssoatestris_';
const testValue3 = 'qwertyuioplkjhgfdsazxcv';

describe('When comparing two strings using isPermutation() ', () => {
  it('that are permutations the method should return true.', () => {
    expect(isPermutation(testValue1, testValue2)).toBe(true);
  });

  it('that are not permutations the method should return false.', () => {
    expect(isPermutation(testValue1, testValue3)).toBe(false);
  });
});
