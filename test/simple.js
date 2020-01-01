// const assert = require("assert");
const {should, expect, assert} = require("chai");
const {add, mul} = require("../src/math.js");

/* if (add(2, 3) == 5) {
    console.log('add(2, 3) === 5, ok')
}else{
    console.log('add(2, 3) !== 5, error')
} */
// assert.equal(mul(2, 3), 6);
should();

add(2, 3).should.equal(5);
expect(add(2, 3)).to.be.equal(5);
assert.equal(add(2, 3), 5);
