const {should, expect, assert} = require("chai");
const {add, mul, cover} = require("../src/math.js");



describe("#math", () => {
    describe('add', () => {
        it('should return 5 when 2 + 3', () => {
            expect(add(2, 3)).to.be.equal(5);
        });
        // it.skip  跳过这个，继续下个执行
        // it.only  只执行当前，其他的不执行
        it('should return -1 when 2 + 3', () => {
            expect(add(2 - 3)).to.be.equal(-1);
        });
    });

    describe('mul', () => {
        it('should return 1 when 2 * 3', () => {
            expect(mul(2, 3)).to.be.equal(6);
        })
    });

    describe('cover', () => {
        it('should return 1 when cover(2, 1)', () => {
            expect(cover(2, 1)).to.equal(1);
        })

        it('should return 3 when cover(1, 2)', () => {
            expect(cover(1, 2)).to.equal(3);
        })

        it('should return 4 when cover(2, 2)', () => {
            expect(cover(2, 2)).to.equal(4);
        }) 
    })
})