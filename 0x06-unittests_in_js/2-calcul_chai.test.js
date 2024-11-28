const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1, 4)).to.equal(5);
    expect(calculateNumber('SUM', 3, 3)).to.equal(6);
  });
  it('should return subtract of integers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 4, 4)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 9, 3)).to.equal(6);
  });
  it('should return division of integers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 2, 5.2)).to.equal(0.4);
    expect(calculateNumber('DIVIDE', -1.6, 5.2)).to.equal(-0.4);
  });
  it('should return "Error" if divisor rounds to 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0.3)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 7.4, -0.4)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 9, 0)).to.equal('Error');
  });
});
