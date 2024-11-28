const assert = require('assert');
const mocha = require('mocha');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  })
})
