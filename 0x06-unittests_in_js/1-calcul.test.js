const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1, 4), 5);
    assert.strictEqual(calculateNumber('SUM', 3, 3), 6);
  });
  it('should return subtract of integers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 4), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 9, 3), 6);
  });
  it('should return division of integers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 2, 5.2), 0.4);
    assert.strictEqual(calculateNumber('DIVIDE', -1.6, 5.2), -0.4);
  });
  it('should return "ERROR" if divisor rounds to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.4, 0.3), 'ERROR');
    assert.strictEqual(calculateNumber('DIVIDE', 7.4, -0.4), 'ERROR');
    assert.strictEqual(calculateNumber('DIVIDE', 9, 0), 'ERROR');
  });
});
